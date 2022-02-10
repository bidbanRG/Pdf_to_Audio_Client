const express = require('express');
const app = express();
const mongoose = require('mongoose');
const usermodel = require('./model/Users')
const cors = require("cors");

mongoose.connect("mongodb+srv://banrg:madarchod786@cluster0.m1ev7.mongodb.net/WebApp?retryWrites=true&w=majority")
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    usermodel.find({}, (err,result)=>{
         if(err){
            res.json(err);
         }else{
             res.json(result);
         }
    })
})
app.post("/send", async (req,res)=>{
    const user = req.body;
    const newUser = new usermodel(user);
    await newUser.save();
    res.json(user);
})

app.post("/delete", (req,res) => {
    
})

app.listen('3001',()=>{
   console.log("server is running");  
});