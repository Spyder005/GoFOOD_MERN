const express = require('express')
const router =express.Router()
const User = require('../models/User')
const {body,validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const jwtSecret = "Mynameismanaschouhdaryechannel#$"
//for creating new user
router.post('/createuser',[
    body('email').isEmail(),
    body('name').isLength({min:5}),
    body('password','Incorrect Password').isLength({min:5}),

],async (req,res) => {
    
     const errors =validationResult(req);
     if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()});
     }
     const salt = await bcrypt.genSalt(5);
     const secPassword = await bcrypt.hash(req.body.password,salt);

    try{
        await User.create({
            name:req.body.name,
            password:secPassword,
            email:req.body.email,
            location:req.body.location
        })
        res.json({success:true});
    }
    catch(err) {
          console.log(err)
          res.json({success:false});
    }
})

//for login user
router.post('/loginuser',[
    body('email').isEmail(),
    body('password','Incorrect Password').isLength({min:5}),

],async (req,res) => {
    
     const errors =validationResult(req);
     if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()});
     }
     
     let email = req.body.email;

    try{
        let userData = await User.findOne({email});
        if(!userData){
            return res.status(400).json({errors:"check your email id or signin"});
        }
        const pwdcompare = await bcrypt.compare(req.body.password,userData.password);
        if(!pwdcompare){
            return res.status(400).json({errors:"enter correct password"});
        }
        const data ={
            user:{
                id:userData.id
            }
        }
    const authToken = jwt.sign(data,jwtSecret)
        return  res.json({success:true,authToken:authToken});
    }
    catch(err) {
          console.log(err)
          res.json({success:false});
    }
})


module.exports =router;