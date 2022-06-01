const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.mongoUrl)
        .then(() => console.log("Connected to the Database"))
        .catch(err => console.log("Failled to connect", err))
    } catch (err) {
        console.log(err)
        
    }
};

module.exports = connectDB;