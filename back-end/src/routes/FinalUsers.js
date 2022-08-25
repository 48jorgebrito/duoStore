const express = require('express')
const router = express.Router()
const FinalUserController = require('../controllers/FinalUserController')
const SessinController = require('../controllers/SessionsController')

router.post('/cadastrar', FinalUserController.create )
router.post('/storesessions', SessinController.create)

router.get('/cadastrar', FinalUserController.list )
router.get('/cadastrar/:id', FinalUserController.show )
router.put('/cadastrar/:id', FinalUserController.update )
router.delete('/cadastrar/:id', FinalUserController.destroy )

module.exports = router