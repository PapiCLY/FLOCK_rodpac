const express = require('express')
const app = express()
const dotenv = require('dotenv')


//environtment variables
require('dotenv').config()

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})