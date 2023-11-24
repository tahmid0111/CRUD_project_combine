const express = require('express')
const app = express()
const path=require('path')
const cors=require('cors')

// other packages are imported here
const mongoose = require('mongoose')
require('dotenv').config()
const router = require('./src/routes/api')


let DB_Port = process.env.DB_Port
app.use(express.json())
app.use(cors())


// connected to the database
mongoose.connect(DB_Port)

// router is used here
app.use('/api/v1', router)


// wrong url goes here
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'client', 'my-app', 'index.html'))
})

module.exports = app