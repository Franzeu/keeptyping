const express = require('express')
const {
    getWords
} = require('../controllers/wordsController')

const router = express.Router()

// Get words
router.get('/', getWords)

module.exports = router