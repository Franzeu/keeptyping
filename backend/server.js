require('dotenv').config()

const express = require ('express')
const mongoose = require('mongoose')
const wordsRoutes = require('./routes/words')

// Express App
const app = express()

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/words', wordsRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listens for requests
        app.listen(process.env.PORT, () => {
            console.log('Listening to Port:', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
