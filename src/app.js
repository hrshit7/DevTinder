const express = require("express");

const app = express();

// order matters a lot

// this will only handle get call to /user

//params
app.get("/user/:id/:name/:age", (req, res)=>{
    console.log(req.params);
    res.send({firstName: "Harshit", lastName: "Choudhary"});
})

//query
app.get("/user", (req, res)=>{
    console.log(req.query);
    res.send({firstName: "Harshit", lastName: "Choudhary"});
})

//multiple b allowed
app.get("/ab+c", (req, res)=>{
    res.send({firstName: "Harshit", lastName: "Choudhary"});
})

//starting with ab and ending c only allowd
app.get("/ab*c", (req, res)=>{
    res.send({firstName: "Harshit", lastName: "Choudhary"});
})

//use of optional on bc
app.get("/a(bc)*d", (req, res)=>{
    res.send({firstName: "Harshit", lastName: "Choudhary"});
})

//regex contain a
app.get(/a/, (req, res)=>{
    res.send({firstName: "Harshit", lastName: "Choudhary"});
})

//regex ending with fly only
app.get(/.*fly$/, (req, res)=>{
    res.send({firstName: "Harshit", lastName: "Choudhary"});
})
// this will only handle get calls to /test
app.use("/test", (req, res)=>{
    res.send("Server for testing"); 
})

app.listen(7777, ()=>{console.log("Server started at port 7777....")});