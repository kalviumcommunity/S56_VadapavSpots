const express = require("express")
const port = process.env.PORT
const app = express()

app.get("/ping", (req, res) => {
    try {
        res.send("pong")
    } catch (err) {
        console.log(err)
    }
})

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server has Started..!! 🚀")
    }
})