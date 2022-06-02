const express = require("express");
const app = express();
const port = process.env.port || 5000;
const connectDB = require("./DB/connectDB");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const router = require("./router/Userrouter");
app.use("/user", router);
connectDB();
app.listen(port, (err)=>{
    err ? console.log(err) : console.log(`server is running at ${port}`);
});