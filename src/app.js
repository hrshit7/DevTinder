const express = require("express");

const app = express();

app.use("/user", 
[(req, res, next)=>{
        console.log("rH")
        next();},
    (req, res, next)=>{
        console.log("rH2")
        next();
        },
        (req, res, next)=>{
            res.send(';rfejlf')
            console.log("rH3")
            next();
            },
            (req, res, next)=>{
                console.log("rH4")
                next();
                },
                (req, res, next)=>{
                    console.log("rH5")
                    next();
                    },]
)

app.listen(7777, ()=>{console.log("Server started at port 7777....")});