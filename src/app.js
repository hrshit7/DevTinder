const express = require("express");

const app = express();

//error handling in middlewares

app.get("/getuserdata", (req, res)=>{
    // logic of db call and get user data
    //also we do with try and catch
    // try{
        throw new Error("fajkflrsf");
        res.send("All user data sent");
    // }catch(err){
    //     res.status(500).send("Internal error");
    // }
    
})

app.use("/", (err, req, res, next)=>{
    if(err){
        // log error
        //console.log(err);
        res.status(500).send("something went wrong");
    }
})

app.listen(7777, ()=>{console.log("Server started at port 7777....")});