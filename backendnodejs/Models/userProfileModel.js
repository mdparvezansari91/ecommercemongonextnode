const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    label:{
        type:String
    },
    street:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    zip:{
        type:String
    }
})


const userProfileSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },

    firstname:{
        type:String,
    },
    lastname:{
        type:String
    },
    addresses:{
        type:[addressSchema],
        default:[],
    },
    createdAt:{
        type:Date,
        default:()=> Date.now(),
    }

})


const userProfileModel = mongoose.model("userprofile", userProfileSchema);

module.exports = userProfileModel;