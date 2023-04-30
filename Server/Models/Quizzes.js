const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    quizName: {
        type: String,
        required: true
    },

    quiz_id: {
        type: String,
        required: true
    },

    description: {
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

    updated_at: {
        type: Date,
        default: new Date()
    },

    created_by: {
        type: Object,
        required: true,
        contains: {
            Users : {
                type: Object,
                required: true,
            },
            UsersId: {
                type: String
            }
        }
        },
    deleted_at: {
            type: Boolean,
            default: false
        }
    })


module.exports = Users = mongoose.model("Quizzes", QuizSchema);