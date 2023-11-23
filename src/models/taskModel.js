const mongoose=require('mongoose')

const taskSchema = mongoose.Schema({
    UserName: {
        type: String,
        unique: true,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    TaskStatus: {
        type: String,
        required: true
    },
    TaskDesc: {
        type: String,
        required: true
    }


}, {timestapms: true})

const taskModel = mongoose.model('task', taskSchema)

module.exports = taskModel