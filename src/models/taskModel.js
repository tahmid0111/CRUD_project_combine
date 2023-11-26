const mongoose=require('mongoose')

const taskSchema = mongoose.Schema({
    firstName: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true
    },
    gender: {
        type: String,
        // required: true
    },
    dateOfBirth: {
        type: Date,
        // required: true
    },
    nationality: {
        type: String,
        // required: true
    },
    address: {
        type: String,
        // required: true
    },
    Email: {
        type: String,
        // required: true
    },
    phone: {
        type: Number,
        // required: true
    },
    admissionDate: {
        type: Date,
        default: Date.now(),
    },
    courses: {
        type: String,
        // required: true
    }


}, {timestapms: true})

const taskModel = mongoose.model('task', taskSchema)

module.exports = taskModel