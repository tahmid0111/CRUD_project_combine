const taskModel = require('../models/taskModel') //task model is imported

// here you can create a new task
exports.Create = async (req, res) => {
    let reqBody = req.body
    try {

        const data = await taskModel.create(reqBody)

        res.status(200).json({status:'succesfully created', data: data})

    } catch (error) {
        res.status(404).json({status:'something went wrong'})
    }
}

// here you can see all tasks
exports.Read = async (req, res) => {
    try {

        const data = await taskModel.find()

        res.status(200).json({status:'success', data: data})

    } catch (error) {
        res.status(404).json({status:'something went wrong'})
    }
}

// here you can find a single task
exports.ReadById = async (req, res) => {

    let myId = req.params.id
    let Querry = {_id: myId}

    try {

        const data = await taskModel.find(Querry)

        res.status(200).json({status:'find success', data: data})
        
    } catch (error) {
        res.status(404).json({status:'something went wrong'})
    }
}

// here you can update a single task
exports.Update = async (req, res) =>{

    let myId = req.params.id

    let Querry = {_id: myId}

    let reqBody = req.body

    try {
        
        const data = await taskModel.updateOne(Querry, reqBody)

        res.status(200).json({status:'update success', data: data})
        
    } catch (error) {
        res.status(404).json({status:'something went wrong'})
    }
}

// here you can delete a single task
exports.DeleteById = async(req, res) => {
        
    let myId = req.params.id

    let Querry = {_id: myId}

    try {
        
        await taskModel.deleteOne(Querry)

        res.status(200).json({status:'removed'})
        
    } catch (error) {
        res.status(404).json({status:'something went wrong'})
    }
}


// here you can delete all tasks
exports.DeleteAll = async(req, res) => {
    
   try {
        
        await taskModel.deleteMany({})

        res.status(200).json({status:'all deleted',})
        
    } catch (error) {
        res.status(404).json({status:'something went wrong'})
    }
}