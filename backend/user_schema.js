const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : String,
    rating : Number,
    timing : String,
    location : String,
    imageUrl : String,
    direction : String
})

let userModel = mongoose.model("vadapavspots-colls" , userSchema)

module.exports = {
    userModel
}