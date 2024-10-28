const express = require("express");

const app = express();

// order matters a lot

// this will only handle get call to /user
app.get("/user", (req, res)=>{
    res.send({firstName: "Harshit", lastName: "Choudhary"});
})

//post 
app.post("/user", (req, res)=>{
    //saving data to db
    res.send("Data stored successfully")
})

//delete
app.delete("/user", (req, res)=>{
    res.send("Deleted Successfully");
})

//put
app.put("/user", (req, res)=>{
    res.send("file saved");
})

//patch
app.patch("/user", (req, res)=>{
    res.send("Updated Successfully");
})

// this will only handle get calls to /test
app.use("/test", (req, res)=>{
    res.send("Server for testing"); 
})

app.listen(7777, ()=>{console.log("Server started at port 7777....")});