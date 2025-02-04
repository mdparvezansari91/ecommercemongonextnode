const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");


const signup = async (req, res) => {
    try {
        const {emailid,password} = req.body;

        // Check if emailid or password is missing
        if (!emailid || !password) {
            return res.status(204).json({
                sucess:false,
                message:"Email id or password is missing"
            })
        }

        // Check if the user already exists by searching for emailid
        const existingUser = await userModel.findOne({ emailid });
        if (existingUser) {
            return res.status(409).json({
                sucess:false,
                message:"user is already registered",
            })
        }

        const saltRounds = 10;
        
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        // Create the new user
        await userModel.create({ emailid, password:hashedPassword });
        
        // Send success response with status 201 (created)
        res.status(201).json({
            success: true,
            message: "User created successfully"
        });

    } catch (error) {
        // Send error response
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = signup;
