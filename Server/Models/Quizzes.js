const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    quizName: {
        type: String,
        required: true
    },

    questions: {
        type: [],
        required: true
    },

    description: {
        type: String,
        required: true,
        unique: true
    },

    imgUrl: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    participants: {
        type: [],
        required: false
    },

    createdAt: {
        type: Date,
        default: new Date()
    },

    updatedAt: {
        type: Date,
        default: new Date()
    },

    created_by: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },

    deleted_at: {
            type: Boolean,
            default: false
        }
    })


module.exports = Quiz = mongoose.model("Quizzes", QuizSchema);