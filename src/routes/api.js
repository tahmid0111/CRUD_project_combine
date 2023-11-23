const express=require('express')
const router=express.Router()


// imported all taskcontroller
const { Create, Read, ReadById, Update, DeleteById, DeleteAll } = require('../controllers/taskController')

router.post('/create', Create)

router.get('/read', Read)

router.get('/readbyid/:id', ReadById)

router.post('/update/:id', Update)

router.post('/deletebyid/:id', DeleteById)

router.post('/deleteall', DeleteAll)



module.exports = router