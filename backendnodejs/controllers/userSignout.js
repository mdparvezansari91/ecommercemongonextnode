const userSignout = async(req,res)=>{
    try {
        res.clearCookie("token")
        return res.status(200).json({
            success:true,
            message:"Logout Successfull"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error || "something went wrong"
        })
    }


}

module.exports = userSignout;