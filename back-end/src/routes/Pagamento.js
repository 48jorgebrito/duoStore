const express = require('express')
const router = express.Router()
const PagamentoController = require('../controllers/PagamentoController')



router.post('/pagamento', PagamentoController.createCob)



module.exports =  router