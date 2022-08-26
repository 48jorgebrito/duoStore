const express = require('express')
const router = express.Router()
const FinalUserController = require('../controllers/FinalUserController')
const StoreSessionContoller = require('../controllers/StoreSessionContoller')
const authRoutes = require('../middlewares/auth')

router.post('/storesessions', StoreSessionContoller.create)
router.post('/cadastro', FinalUserController.create)
//Middlleware auth of Routes
//router.use(authRoutes.authToken)

router.get('/cadastro', FinalUserController.list )
router.get('/cadastro/:id', FinalUserController.show )
router.put('/cadastro/:id', FinalUserController.update )
router.delete('/cadastro/:id', FinalUserController.destroy )

module.exports = router