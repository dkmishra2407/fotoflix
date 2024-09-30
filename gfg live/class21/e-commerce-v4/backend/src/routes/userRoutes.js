const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get('/fake', async(req,res)=>{

    const hash = await bcrypt.hash("1234",12);
    const User = await User.create({
         username:"max",
         hash:hash,
         email:"abc@gmail.com"
    });
});


module.exports = router;