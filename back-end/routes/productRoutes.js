const express = require("express");
const router = express.Router()
const Product = require('../config/models/Products')

//CONFUGURANDO O MULTER
const multer  = require('multer')
const multerConfig = require('../config/multer')

//ROTA PARA CRIAR UM PRODUTO NO DATABASE
router.post('/', multer(multerConfig).single('file'),async (req, res) =>{

    const {name, size, sex, price} = req.body
    
    
    if( req.file === undefined){
        console.log("selecione uma imagem")
        return
    }
    const {filename : key} = req.file
   const url = `http://localhost:8081/files/${key}`
    
    const product = { 
        name,
        size,
        sex,
        price, 
        url,
        key
    }
    if(!name || !size || !sex || !price ){
        res.status(500).json({message: 'precisa preencher todos os campos'})
        return 
    }
try{
    await Product.create(product)
    res.status(200).json({message: 'protudo adicionado com sucesso'})
}catch(error){
    res.status(500).json({error: error})
}
    
}) 


//ROTA PARA ENCONTRAR TODOS PRODUTOS NO DATABASE
router.get('/', async (req, res) =>{
    const resultsProduct = await Product.find()

    res.status(200).json(resultsProduct)
})


//ROTA PARA ENCONTRAR UM UNICO PRODUTO NO DATABASE
router.get('/:id' , async (req, res) =>{
   const id = req.params.id 
    try{
        const product = await Product.findOne({_id: id})

        if(!product){
            res.status(422).json({message: "usuario não encontrado"})
            return
        }
        
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({error: error})
    }
})


//ROTA PARA ATUALIZAR UM PRODUTO
router.patch('/:id' , multer(multerConfig).single('file') , async (req, res)=>{
    
    const id = req.params.id

    const {name, size, sex, price} = req.body
    const {filename : key} = req.file
    const url = `http://localhost:8081/files/${key}`

    const product = { 
        name,
        size,
        sex,
        price,
        url

    }

    try{
       const updateProduct = await Product.updateOne({_id:id}, product) 
       res.status(200).json(product)
        if(updateProduct.matchedCount === 0){
            res.status(422).json({message: "O produto não foi encontrado"})
            return
        }


    }catch(error){
        res.status(500).json({error: error})
    }

})



//ROTA PARA DELETAR UM PRODUTO
router.delete('/:id', async (req, res) =>{
    const id = req.params.id
    const product = await Product.findOne({_id:id})

    if(!product){
        res.status(422).json({message: "O Produto não existe"})
        return
    }
    try{
        await Product.deleteOne({_id:id})

        res.status(200).json({message: " O Produto foi excluido com sucesso"})

    }catch(error){
        res.status(500).json({error: error})
    }
})

module.exports = router