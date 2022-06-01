const mongoose = require("mongoose");

const {Schema, model} = mongoose;

const userSchema = new Schema({
    name: {type:String, required:true}
})

const users = model("User", userSchema);

module.exports = users;
