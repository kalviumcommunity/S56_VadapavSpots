const { connectToDb , isConnected} =  require("./db.js")
const express = require("express")
const port = process.env.PORT || 3000
const cors = require("cors")
const {validateData} = require("./validator.js")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())

const { route1 } = require("./Routes/routes.js")
const { userModel  , userNameModel} = require("./user_schema.js")

connectToDb()

app.get("/getdata" , async (req,res)=>{
    try {
        const data = await userModel.find({})
        res.json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({error : "Internal Server Error"})
    }
})

app.post("/createdata" , (req , res)=>{
    console.log(req.body)
    const {error} = validateData(req.body);
    // console.log(hello)
    console.log(error)
    if (error){
        return res.status(400).json({error : "Provided Data is Invalid"})
    }
    userModel.create(req.body).then((el)=> res.json(el))
    .catch(err => res.json(err))
})

app.put("/updatespot/:id" , async (req, res)=>{
    const id = req.params.id;
    try{
        let newdata = await userModel.findByIdAndUpdate({_id:id},req.body,{ new: true })
        res.send(newdata)
    }catch(err){
        res.send(err)
    }
        
})

app.delete("/deletespot/:id" , async (req,res)=>{
    const id = req.params.id;
    console.log(id)
    try{
        userModel.findByIdAndDelete({_id:id})
            .then((el)=>{
                res.send(el)
            })
    }catch(err){
        res.send(err)
    }
})

app.get("/ping", (req, res) => {
    try {
        res.send("pong")
    } catch (err) {
        console.log(err)
    }
})

app.use(route1)

app.use((err, req, res, next) => {
    res.status(500).send({
        error: err.message
    });
});

app.get("/" , (req , res)=>{
    res.json({DatabaseConnection: isConnected()? "Connected" : "Failed"})
})

app.post("/auth" , (req , res)=>{
    let userDetails = req.body
    // console.log(req.body)
    let token = jwt.sign(userDetails.username , process.env.SECRET)
    try{
        userNameModel.create({name : userDetails.username})
    }catch(err){
        res.status(500).send({
            error: err.message
        });
    }
    res.send(token)
})

app.get("/getusers" , async (req , res)=>{
    try{
        const data = await userNameModel.find({})
        res.json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({error : "Internal Server Error"})
    }
})

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server has Started at port ${port}..!! 🚀`)
    }
})