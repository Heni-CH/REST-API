const express = require("express");
const users = require("../models/User");
const router = express.Router();


router.put("/users/:id", async(req,res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        await users.findByIdAndUpdate({_id : id}, {$set : {name: name}});
        res.status(200).send({ message: "Update compeleted"})
    } catch (error) {
        res.status(500).send({ message: "An error has been detected"});
        console.log(error)  
    }
});

router.delete("/users/:id", async(req, res) => {
users.findByIdAndRemove(req.params.id, (err) =>{
    err ? res.status(501).send(err) : res.status(200).send("User has been deleted")
});
});

router.post("/users", async(req, res) => {
    try {
        const {name} = req.body;
        const newName = new users({name});
        const user = await newName.save();
        res.status(201).json(user)
    } catch (error) {
        res.json(error);
        
    }
});

router.get("/users", async(req,res) => {
    try {
        const user = await users.find();
        res.status(201).json({data:user})
    } catch (error) {
        res.status(401).json({Error:error})
    }
 });
 module.exports = router;