const express = require("express")

const app = express()

app.get("/ping", (req, res) => {
    res.send("pong")
})

app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server has Started..!! 🚀")
    }
})