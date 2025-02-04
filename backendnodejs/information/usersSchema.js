const userModel = require("../Models/userModel");

const userSchema = async (req, res)=>{

    try {
        const {obj} = userModel.schema

    return res.status(200).json({
        success:true,
        obj

    })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error,
        })
    }


}

module.exports = userSchema;