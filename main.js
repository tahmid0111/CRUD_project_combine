const express = require('express')
const app = express()

const mongoose = require('mongoose')
require('dotenv').config()

const router = require('./src/routes/api')


let DB_Port = process.env.DB_Port

app.use(express.json())

mongoose.connect(DB_Port)


app.use('/api/v1', router)



app.get('*', (req, res) => {
    res.send('you entered in a wrong URL')
})

module.exports = app