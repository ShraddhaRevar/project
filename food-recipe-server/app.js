const express=require("express");
const app=express();
const PORT=5000;

const userRouter=require("./routes/userRouter");
const foodRouter=require("./routes/foodRouter"); 
require("dotenv").config();
const connectDB=require("./config/db");
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users",userRouter);
app.use("/foods",foodRouter);
app.get("/",(req,res)=>{
    res.send("Food Recipe App Server");
})

app.listen(PORT,()=>{
    console.log(`Server Started listening at Port :${PORT}`);
})
