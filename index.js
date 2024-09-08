// console.log("rushikesh nikam");
require('dotenv').config();
const express = require("express")
const app = express();
const port = process.env.PORT ;

app.get("/",(req,res)=>{
    res.send('Hello world');
})
app.get("/twitter",(req,res)=>{
    res.send("rushikesh Nikam")
})
app.get("/login",(req,res)=>{
    res.send(`<h1>Please login the page</h1>`)
})
app.get("/youtube",(req,res)=>{
    res.send(`<h2>watch youtube video </h2>`)
})
app.listen(port,()=>{
    console.log("example app listening on port",port);
})