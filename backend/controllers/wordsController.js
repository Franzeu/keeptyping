const mongoose = require('mongoose')
const Word = require('../models/wordsModel')

// Get words
const getWords = async (req, res) => {
    const words = await Word.find({})

    res.status(200).json({words})
}

module.exports = {
    getWords
}