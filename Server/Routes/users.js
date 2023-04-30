const express = require("express");
const Users = require("../Models/Users");
const Quiz = require("../Models/Quizzes")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkAuth = require("../MiddleWare/check-auth");
const env = require("dotenv").config();

const { LoginValidator, RegisterValidator } = require("../Validators/validators");
const Quizzes = require("../Models/Quizzes");

const router = express.Router();

router.post('/users/auth/login', (req, res) => {
    const {errors, isValid} = LoginValidator(req.body);
    if (!isValid) {
        res.json({success: false, errors});
    } else {
        Users.findOne({email: req.body.email}).then(user => {
            if (!user) {
                res.json({message: "Email not found", success: false})
            } else {
                bcrypt.compare(req.body.password, user.password).then(success => {
                    if (!success) {
                        res.json({message: "Invalid Password", success: false})
                    } else {
                        const payload = {
                            id: user._id,
                            name: user.firstName
                        }
                        jwt.sign(
                            payload,
                            process.env.APP_SECRET, {expiresIn: 2155926},
                            (err, token) => {
                                res.json({
                                    user,
                                    token: `Bearer Token: ` + token,
                                    success: true
                                })
                            }
                        )
                    }
                })
            }
        })
    }
})




router.post('/users/auth', (req, res) => {
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

router.get('/:id', (req, res) => {
    Users.findOne({_id: req.params.id}).then(user => {
        res.json({user, success: true}).catch(er => {
            res.json({success: false, message: er.message})
        })
    })
})

router.delete('/:id', (req, res) => {
    Users.findOneAndDelete({_id: req.params.id}).then(user => {
        res.json({message: "User deleted succesfully", success: true}).catch(er => {
            res.json({success: false, message: "Can't Delete User"})
        })
    })
})













module.exports = router;

 