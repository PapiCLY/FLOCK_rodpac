const path = require('path')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')
const mainRoute = require('./routes/index')


//environtment variables
require('dotenv').config()

//connecting to DB
connectDB()

//body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//logging CRUD requests
app.use(morgan('dev'))

//handlebars helpers
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs'
})

//handlebars
app.engine('hbs', hbs.engine)
app.set('view engine', '.hbs')

//static folder
app.use(express.static(path.join(__dirname, 'public')))


//Routes
app.use('/', mainRoute)
const PORT = process.env.PORT || 2641

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})