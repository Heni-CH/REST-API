const express = require("express");
const app = express();
const port = process.env.port || 4000;
const connectDB = require("./connectDB/connectDB");
const users = require("./models/User");
const router = express.Router();
app.use("/api", router);
router.use(express.json());


router.get("/user", async(req,res) => {
    try {
        const user = await users.find();
        res.status(201).json({data:user})
    } catch (error) {
        res.status(401).json({Error:error})
    }
});

router.post("/user", async(req, res) => {
    try {
        const {name} = req.body;
        const newName = new users({name});
        const user = await newName.save();
        res.status(201).send(({ message: "user has been saved", data:user}))
    } catch (error) {
        res.send("An error has been detected");
        console.log(error);
    }
});

router.put("/user/:id", async(req,res) => {
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

router.delete("/user/:id", async(req, res) => {
    users.findByIdAndRemove(req.params.id, (err) =>{
        err ? res.status(501).send(err) : res.status(200).send("User has been deleted")
    });
});

connectDB();


app.listen(4000, (err)=>{
    err ? console.log(err) : console.log(`server is running at ${port}`);
});