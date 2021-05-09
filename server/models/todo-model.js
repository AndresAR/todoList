const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Todo = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        time: { type: [String], required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('todos', Todo)