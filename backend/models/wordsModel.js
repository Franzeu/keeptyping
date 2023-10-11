const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Defines the structure of our database
const wordsSchema = new Schema ({
    words: {
        type: String
    }

}, {timestamps: true})

module.exports = mongoose.model('Words', wordsSchema)