const express = require('express')
const router = express.Router()
const FinalUserController = require('../controllers/FinalUserController')
const StoreSessionContoller = require('../controllers/StoreSessionContoller')
const PedidosController = require('../controllers/PedidosController')

const authRoutes = require('../middlewares/auth')



router.post('/storesessions', StoreSessionContoller.create)
router.post('/cadastro', FinalUserController.create)
//Middlleware auth of Routes
//router.use(authRoutes.authToken)

router.get('/cadastro', FinalUserController.list )
router.get('/cadastro/:id', FinalUserController.show )
router.put('/cadastro/:id', FinalUserController.updateAddres)
router.delete('/cadastro/:id', FinalUserController.destroy )

// rotas de pedidos 
router.get('/pedido/:user_id', PedidosController.list)
router.get('/pedido', PedidosController.pedidoList)
router.post('/pedido/:user_id', PedidosController.create)








module.exports = router