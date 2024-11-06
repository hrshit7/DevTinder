const express = require("express");

const {authUser, authUserLogged} = require("./middlewares/auth")

const app = express();

app.use("/admin", authUser)

app.post("/user/login", (req , res )=>{
    res.send("User logged in successfully");
})

app.use("/user", authUserLogged, (req, res)=>{
    res.send("User data sent");
})

app.post("/admin/getalldata", (req, res)=>{
    res.send("all data sent--");
})

app.delete("/admin/deleteuser", (req, res)=>{
    res.send("User Deleted!!");
})

app.listen(7777, ()=>{console.log("Server started at port 7777....")});