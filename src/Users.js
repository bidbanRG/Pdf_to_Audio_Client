const mongoose = require('mongoose');

const userbody = new mongoose.Schema({
     name:{
         type:String,
         required:true,
     },
    comment: {
         type:String  
    } 
});

const userModel = mongoose.model("WebApp",userbody)
module.exports = userModel