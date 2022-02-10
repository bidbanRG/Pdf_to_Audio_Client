const mongoose = require('mongoose');

const userbody = new mongoose.Schema({
     name:{
         type:String,
         required:true,
     },
    comment: {
         type:String, 
         required:true, 
    }, 
});

const userModel = mongoose.model("users",userbody)
module.exports = userModel