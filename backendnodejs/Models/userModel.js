const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    emailid:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:['seller', 'buyer'],
        default:'buyer',
    }
})


const userModel = mongoose.model("user",userSchema);

module.exports = userModel;