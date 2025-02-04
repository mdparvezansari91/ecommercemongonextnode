const express = require("express");
const signup = require("../controllers/userSignup");
const signIn = require("../controllers/userSignin");
const authenticateUser = require("../middleware/middleware");
const userProfile = require("../controllers/userProfile");
const userSchema = require("../information/usersSchema");
const productSchema = require("../information/productSchema");
const userSignout = require("../controllers/userSignout");

const router = express.Router();


router.get("/userschema", userSchema)
router.get("/productschema", productSchema)

router.get("/test", (req,res)=>{
    console.log(req)
    res.status(200).json({
        success:true,
        message:"Response From Test URL"

    })

})

router.post("/signup", signup)
router.post("/signin", signIn)
router.post("/userprofile", authenticateUser, userProfile)
router.post("/signout", userSignout);
router.post("/admin/*", authenticateUser);

module.exports = router;
