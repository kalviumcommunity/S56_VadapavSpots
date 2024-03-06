const { connectToDb , isConnected} =  require("./db.js")
const express = require("express")
const port = process.env.PORT || 3000
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const { route1 } = require("./Routes/routes.js")
const { userModel } = require("./user_schema.js")

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
    userModel.create(req.body).then((el)=> res.json(el))
    .catch(err => res.json(err))
})

app.put("/updatespot/:id" , async (req, res)=>{
    const id = req.params.id
    console.log(req.body , id)
    try{
       let newdata = await userModel.findByIdAndUpdate({_id:id},req.body,{ new: true })
        res.send(newdata)
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

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server has Started at port ${port}..!! 🚀`)
    }
})