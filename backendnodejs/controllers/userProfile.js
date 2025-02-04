const userModel = require("../Models/userModel");
const userProfileModel = require("../Models/userProfileModel");

const userProfile = async (req, res) => {
    try {
        

        const {userId} = req
        const userExists = await userModel.findById(userId)

        if(!userExists){
        

            return res.status(403).json({

                sucess:false,
                message:"user not found"
            })
        }

        var userProfile = await userProfileModel.findOne({userId:userId})
        if(!userProfile){
            await userProfileModel.create({userId:userId});
        }
        console.log({"userprofile.js":userProfile});
        var userProfile = await userProfileModel.findOne({userId}).populate("userId")
        console.log({"userprofile.js var":userProfile})
        res.status(200).json({
            success:true,
            message:"user Profile",
            userProfile
                        
        })

    } catch (error) {
        
        res.status(400).json({
            success:false,
            message:error.message
        })

    }

}

module.exports = userProfile;