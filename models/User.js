const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const {Schema, model} = mongoose;

const userSchema = new Schema({
    name: {type: String, required: true},
  
});

const users = model("user", userSchema);

module.exports = users;
