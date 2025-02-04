const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

const signIn = async (req, res) => {
    try {
        console.log(req.body)
        const { emailid, password } = await req.body;


        if (!emailid || !password) {
            return res.status(201).json({
                sucess: false,
                message: "Email id or password is missing"
            })
        }
        const user = await userModel.findOne({ emailid })
        if (!user) {
            return res.status(203).json({
                sucess: false,
                message: "User not found"
            })
        }
        console.log({ "emailid": user.emailid, "password": user.password })

        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            return res.status(203).json({
                sucess: false,
                message: "Invalid user id or password"
            })
        }

        const tokenData = {
            _id: user._id,
            emailid: user.emailid
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 })
        res.setHeader('Set-Cookie', `tokenfromsetcookie=${token}; HttpOnly; Secure; SameSite=None; Max-Age=${60 * 60 * 8}`);
        res.cookie('token', token, {
            httpOnly: true,
            expire:token.expiresIn,
            secure: true, // Use secure cookies in production process.env.NODE_ENV === 'production'
            samesite: "None",
        }); 

        



        res.status(200).json({
            success: true,
            message: "user logged in successfully",
            token,

        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            error: error
        })

    }
}


module.exports = signIn;