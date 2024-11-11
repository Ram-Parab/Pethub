const mongoose=require("mongoose")

const petSchema=mongoose.Schema({
name:String,
age:String,
breed:String,
image:String,
gender:String,
size:String
},{
versionKey:false
})

const petModel=mongoose.model("pets",petSchema);

module.exports={
    petModel
}