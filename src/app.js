const express = require("express");

const app = express();

app.use("/test", (req, res)=>{
    res.send("Server for testing"); 
})

app.use("/home",(req,res)=>{
    res.send("Welcome home!!");
})

app.use("/", (req,res)=>{
    res.send("This is a Dashboard");
})

app.listen(7777, ()=>{console.log("Server started at port 7777....")});