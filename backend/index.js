const express=require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./Routes/userRoutes");
const { petRouter } = require("./Routes/petRouter");
const { blackModel } = require("./Models/BlackList");
const { serviceRouter } = require("./Routes/serviceRouter");

const app=express()
app.use(cors());
app.use(express.json());
app.use("/users",userRouter)
app.use("/pet",petRouter)
app.use("/service",serviceRouter)

app.get("/logout",async(req,res)=>{
    const token=req.headers.authorization
try {
    const user= new blackModel({token})
    await user.save();
    res.send("user has been successfully logged out")
} catch (error) {
    res.send({"error":error})
}
})


app.listen(8080,async()=>{
try {
    await connection;
    console.log("connected to the db");
    console.log("server running at 8080");
} catch (error) {
    console.log(error);
}
})