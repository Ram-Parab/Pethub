const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
FirstName:String,
LastName:String,
email:String,
password:String
})

const userModel=mongoose.model("users",userSchema);

module.exports={
    userModel
}