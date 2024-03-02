const { connectToDb , isConnected} =  require("./db.js")
const express = require("express")
const port = process.env.PORT || 3000

const app = express()
app.use(express.json())

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