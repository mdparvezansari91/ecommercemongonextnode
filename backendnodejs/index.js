const express = require("express")
const app = express()
require("dotenv").config();
const PORT = process.env.PORT || 8000
const cors = require("cors");
const router = require("./routes/route");
const ConnectDB = require("./config/db");
app.use(express.json())


app.use(cors({
    origin: process.env.frontendUrl,
    credentials:true,
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



