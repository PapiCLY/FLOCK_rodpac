const express = require('express')
const app = express()
const dotenv = require('dotenv')


//environtment variables
require('dotenv').config()

const PORT = process.env.PORT || 2641

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})