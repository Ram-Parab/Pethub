const mongoose=require("mongoose")

const blackSchema=mongoose.Schema({
token:String
})

const blackModel=mongoose.model("token",blackSchema);

module.exports={
    blackModel
}