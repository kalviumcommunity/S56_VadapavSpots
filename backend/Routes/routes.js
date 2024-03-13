const express = require("express")
const { userNameModel } = require("../user_schema")

const route1 = express.Router()

route1.get("/getspot" , (req , res)=>{
    try{
        res.json({"GetRequest" : "Successful"})
    }catch(err){
        res.json({"error" : err})
    }
})

route1.post("/addspot" , (req,res)=>{
    try{
        res.json({"PostData" : "Successful"})
    }catch(err){
        res.json({"error" : err})
    }
})

route1.put("/updatespot",(req,res)=>{
    try{
        res.json({"UpdateData" : "Successful"})
    }catch(err){
        res.json({"error" : err})
    }
})

route1.patch("/updatespotinfo",(req,res)=>{
    try{
        res.json({"UpdateSingleData" : "Successful"})
    }catch(err){
        res.json({"error" : err})
    }
})

route1.delete("/deletespot",(req,res)=>{
    try{
        res.json({"DeleteData" : "Successful"})
    }catch(err){
        res.json({"error" : err})
    }
})

module.exports = {
    route1
}