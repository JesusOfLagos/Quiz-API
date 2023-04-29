const express = require("express");
const Users = require("../Models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkAuth = require("../MiddleWare/check-auth");

const { LoginValidator, RegisterValidator } = require("../Validators/validators");

const router = express.Router();

router.post('/register', (req, res) => {
    console.log(req.body)
    const {errors, isValid} = RegisterValidator(req.body);
    if (!isValid) {
        res.json({success: false, errors});
    } else {
        const {firstName, lastName, email, password} = req.body;
        const registerUser = new Users({
            firstName, 
            lastName,
            email,
            password,
            createdAt: new Date()
        });
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (hashErr, hash) => {
                if (err || hashErr) {
                    res.json({"message": "Error Occured While Hashing", success: false});
                    return;
                }

                registerUser.password = hash;
                registerUser.save().then(() => {
                    res.json({message: "User Created Succesfuly", "success": true});
                })
            })
        })
    }
})



module.exports = router;

 