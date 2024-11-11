const express=require("express");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const { userModel } = require("../Models/userModel");

const userRouter=express.Router();



userRouter.post("/register",async(req,res)=>{
const {FirstName,LastName,email,password}=req.body
const uppercaseRegex = /[A-Z]/;
    
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    if (!uppercaseRegex.test(password)  || !specialCharRegex.test(password) || password.length <= 6) {
        return res.status(400).json({ 
            error: 'Password must contain at least one uppercase letter, one special character, and be longer than 6 characters' 
        });
    }
try {
    const emailExist=await userModel.findOne({email})
    if(emailExist){
        return res.status(400).json({"msg":"email already exist"})
    }
    bcrypt.hash(password,5,async(err,hash)=>{
        if(err){
            return res.status(500).json({"error": "Error while hashing password"})
        }
        const user=new userModel({FirstName,LastName,email,password:hash});
        await user.save()
        res.status(201).json({"msg":"user has been successfully registered", user: {FirstName, LastName, email}})
    })


} catch (error) {
    res.status(500).json({"error": "Server error while registering"})
}

})


userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body


    try {
        const user=await userModel.findOne({email})
        if(!user){
            return res.status(404).json({"msg":"user does not exist"})
        }

        bcrypt.compare(password,user.password,(err,result)=>{
            if(err){
                return res.status(500).json({"error": "Error comparing passwords"})
            }
            if(result){
                const token=jwt.sign({userID:user._id,user:user.FirstName},"pet")
                console.log("Sending response:", {
                    msg: "Login successful",
                    token: token,
                    user: user.FirstName
                });
                res.json({
                    "msg":"Login successful",
                    "token":token,
                    "user": user.FirstName
                })
            }
            else{
                res.status(401).json({"error": "Invalid credentials"})
            }
        })

    } catch (error) {
        res.status(500).json({"error": "Server error while logging in"})
    }

})



module.exports={
    userRouter
}