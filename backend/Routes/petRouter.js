const express=require("express");
const { petModel } = require("../Models/petModel");
const { auth } = require("../Middleware/auth");
const petRouter=express.Router();


petRouter.get("/",auth,async(req,res)=>{

try {
    const data=await petModel.find({userId:req.body.userId});
    res.send(data)
} catch (error) {
    res.send({"msg":error})
}
})

petRouter.post("/add",async(req,res)=>{

try {
    const user=new petModel(req.body)
    await user.save()
    res.send("the data has been updated")
} catch (error) {
    res.send({"msg":error})
}

})


petRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params
    const pet=await petModel.findOne({_id:id});
try {
    if(req.body.userId!==pet.userId){
        res.send("You are not authorized")
    }
    else{
        await petModel.findByIdAndUpdate({_id:id},req.body);
    res.send({"msg":"the id has been updated"})
    }
    
} catch (error) {
    res.send({"msg":error})
}
})

petRouter.delete("/delete/:id",async(req,res)=>{
const {id}=req.params;
const pet = await petModel.findOne({_id:id})
try {
    if(req.body.userId!==pet.userId){
        res.send("you are not authorized")
    }
    await petModel.findByIdAndDelete({_id:id})
    res.send({"msg":"data has been deleted"})
} catch (error) {
    res.send({"msg":error})
}
})


module.exports={
    petRouter
}


