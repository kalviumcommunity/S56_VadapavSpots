const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : String,
    rating : Number,
    timing : String,
    location : String,
    imageUrl : String,
    direction : String,
    created_by : String
})

const userNameSchema = new mongoose.Schema({
    name : String
})

let userModel = mongoose.model("vadapavspots-colls" , userSchema)
let userNameModel = mongoose.model("user-colls" , userNameSchema)

module.exports = {
    userModel , userNameModel
}