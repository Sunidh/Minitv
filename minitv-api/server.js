const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://Sunidhi:Sunidhi%40123@cluster0.vp10znv.mongodb.net/test/minitv",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB Connected");
});

app.listen(5000,console.log("server started"));