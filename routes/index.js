const express = require("express");
const router = express.Router();
const {User} = require ("../models/user");


//login api
router.post('/user/login', async (req,res) => {
    const {email, password} = req.body;
    console.log("login API hits");
    if (!email||!password){
        res.send("Required fields are empty");
    }

    const user = await User.findOne({
        where: { email: email }
    })
    
    if (!user){
        res.send("User not found");
    }

    if (user.password != password){
        res.send("Password does not match");
    }

    res.json({user});
})

//Registration API

router.post('/user/register', async (req,res) =>{
    const {firstName, lastName, password, email, address} = req.body;
    console.log("Registration API hits");

    if(!firstName || !lastName || !password || !email || !address){
        res.send("Required fields cannot be empty");
    }

    const user = await User.create({
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email,
        address: address
    })

    if (!user) {
        res.send("User could not be created due to some errors");
    }

    res.json({user}); //saved in backend
})

module.exports = router;