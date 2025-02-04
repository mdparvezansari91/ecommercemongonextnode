const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
    try {
        console.log({"from middleware":req})

        const token = req?.cookies?.token
        if(!token){
            console.log("userprofile hit")
            return res.status(401).json({
                sucess:false,
                message:"Login Required"
            })

        }
        console.log({"middleware Line 14":token})
        jwt.verify(token, process.env.TOKEN_SECRET_KEY,(err, decoded)=>{
            if(err){
                return res.status(403).json({
                    sucess:false,
                    message:"Token Invalid. Please login again"
                })
            }
            req.userId=decoded._id
            next();
        })

        

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong"
        })
    }
}

module.exports = authenticateUser;