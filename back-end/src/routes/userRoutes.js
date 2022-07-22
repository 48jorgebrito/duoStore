const express = require('express')
const { create } = require('../models/Users')
const router = express.Router()
const UserController = require('../controllers/UserControler')




// ROTAS USERS

router.get('/', UserController.list)
router.get('/:id', UserController.show)
router.post('/', UserController.create )
router.put('/:id', UserController.update)
router.delete('/:id', UserController.destroy)

// ROTAS PRODUCTS

module.exports = router