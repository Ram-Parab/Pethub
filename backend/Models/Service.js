const mongoose=require("mongoose")

const serviceSchema=mongoose.Schema({
pet:String,
type_of_service:String,
startDate:String,
endTime:String,
userID:String,
user:String,
duration:String
})

const serviceModel=mongoose.model("service",serviceSchema);

module.exports={
    serviceModel
}