const express = require("express")
const app = express()
require("dotenv").config();
const PORT = process.env.PORT || 8000
const cors = require("cors");

app.use(cors());


app.get("/",(req,res)=>{

    res.json({
        "message": "Hello, World!"
    })
})

app.listen(PORT, ()=>{
    console.log("server is running on port 8000")
})

