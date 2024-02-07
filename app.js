const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')


//environtment variables
require('dotenv').config()

connectDB()
const PORT = process.env.PORT || 2641

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})