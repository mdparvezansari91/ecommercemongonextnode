const express = require("express")
const app = express()
require("dotenv").config();
const PORT = process.env.PORT || 8000
const cors = require("cors");
const router = require("./routes/route");
const ConnectDB = require("./config/db");
const cookieParser = require("cookie-parser");
app.use(express.json())
app.use(cookieParser());

console.log({"cors":cors()})
app.use(cors({
    origin: process.env.frontendURL, // Allow requests from this origin
    credentials: true, // Allow credentials (cookies) to be sent
    allowedHeaders: [
        "Content-Type", // Common headers you might want to allow
        "Authorization", // If you're using authorization tokens
        "X-Requested-With", // For AJAX requests
    ],

    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"] // Specify allowed methods
}));

app.use("/api", router);

app.get("/",(req,res)=>{
try {
    return res.status(200).json({
        "message": "Hello, Universe!"
    })
    
} catch (error) {
    return res.status(500).json({
        "message": "Error"
    })
}
})

ConnectDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("server is running on port 8000")
    })
})



