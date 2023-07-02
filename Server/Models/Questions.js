const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    questionName: {
        type: String,
        required: true
    },

    options: {
        type: [],
        required: true    
    },

    correctAnswer: {
        type: String,
        required: true,
        unique: true
    },

    createdAt: {
        type: Date,
        default: new Date()
    },

    updatedAt: {
        type: Date,
        default: new Date()
    },
    
    })


module.exports = Questions = mongoose.model("Questions", QuestionSchema);