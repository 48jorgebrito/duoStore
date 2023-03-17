const express = require('express')
const router = express.Router()
const FinalUserController = require('../controllers/FinalUserController')
const StoreSessionContoller = require('../controllers/StoreSessionContoller')
const PedidosController = require('../controllers/PedidosController')
const authRoutes = require('../middlewares/auth')

const gnConfig = require('../GN_Config/gnConfig')


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
router.post('/pedido/:user_id', PedidosController.create)

//rotas de pagamento






module.exports = router