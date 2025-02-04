const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    label: {
        type: String
    },
    imageUrl: {
        type: String
    }
})

const productSchema = new mongoose.Schema({
    sku: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    bulletPoints: {
        type: [String],
        default: []
    },
    category: {
        type: String
    },
    subCategory:{
        type:String
    },
    gender:{
        type:String
    },
    images: {
        type: [imageSchema],
        default: []
    }


})


const productModel = mongoose.model("product", productSchema);

module.exports = productModel;