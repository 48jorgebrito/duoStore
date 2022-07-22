const express = require('express')
const router = express.Router()

// CONTROLLERS OF ROUTES
const UserController = require('../controllers/UserControler')
const ProductsController = require('../controllers/ProductsController')
// IMPORT MULTER 
const multer  = require('multer')
const multerConfig = require('../config/multer')



// ROTAS USERS

router.get('/users', UserController.list)
router.get('/users/:id', UserController.show)
router.post('/users', UserController.create )
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.destroy)

// ROTAS PRODUCTS
router.post('/products', multer(multerConfig).single('file'), ProductsController.create) 
router.get('/products', ProductsController.list)
router.get('/products/:id' , ProductsController.show)
router.patch('/products/:id' , multer(multerConfig).single('file') , ProductsController.update)
router.delete('/products/:id', ProductsController.destroy)


module.exports = router