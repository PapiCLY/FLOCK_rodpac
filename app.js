const express = require('express')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')


//environtment variables
require('dotenv').config()


//logging CRUD requests
app.use(morgan('dev'))

//connecting to DB
connectDB()
const PORT = process.env.PORT || 2641

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})