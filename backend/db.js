const mongoose=require("mongoose");

const connection=mongoose.connect('mongodb+srv://ramparab0227:heoJ^V7B@cluster0.bmsjmns.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


module.exports={
    connection
}