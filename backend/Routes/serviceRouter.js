const express=require("express");
const { serviceModel } = require("../Models/Service");
const { auth } = require("../Middleware/auth");

const serviceRouter=express.Router();


serviceRouter.get("/",auth,async(req,res)=>{

    try {
        const data=await serviceModel.find({userId:req.body.userId});
        res.send(data)
    } catch (error) {
        res.send({"msg":error})
    }
    })

serviceRouter.post("/add",auth,async(req,res)=>{

    try {
        const user=new serviceModel(req.body)
        await user.save()
        res.send("the data has been updated")
    } catch (error) {
        res.send({"msg":error})
    }

})




module.exports={
    serviceRouter
}