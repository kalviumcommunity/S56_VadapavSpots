const { connectToDb , isConnected} =  require("./db.js")
const express = require("express")
const port = process.env.PORT || 3000
const app = express()

connectToDb()

app.get("/ping", (req, res) => {
    try {
        res.send("pong")
    } catch (err) {
        console.log(err)
    }
})

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