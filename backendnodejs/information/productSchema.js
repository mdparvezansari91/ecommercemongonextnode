const productModel = require("../Models/productModel")

const productSchema = async(req,res)=>{

   try {
    const obj = productModel.schema;

    return res.status(200).json({
        sucess:true,
        obj
    })

   } catch (error) {
    res.status(500).json({
        success:false,
        message:error,
    })
   }
}

module.exports = productSchema;