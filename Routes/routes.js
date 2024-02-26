const express = require("express")

const route1 = express.Router()

route1.get("/getspot" , (req , res)=>{
    res.json({"GetRequest" : "Successful"})
})

route1.post("/addspot" , (req,res)=>{
    res.json({"PostData" : "Successful"})
})

route1.put("/updatespot",(req,res)=>{
    res.json({"UpdateData" : "Successful"})
})

route1.patch("/updatespotinfo",(req,res)=>{
    res.json({"UpdateSingleData" : "Successful"})
})

route1.delete("/deletespot",(req,res)=>{
    res.json({"DeleteData" : "Successful"})
})

module.exports = {
    route1
}