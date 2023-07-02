const Quizzes = require("./Quizzes");


const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: new Date()
    },

    quizzes: {
        type: [],
        required: true
    },

    imgUrl: {
        type: String,
        required: false
    },


    numberOfAttempts: {
        type: Number,
        default: 0
    },
    
    deleted: {
            type: Boolean,
            default: false
        }
    })


module.exports = Users = mongoose.model("Users", UserSchema);