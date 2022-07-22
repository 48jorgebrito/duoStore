const Product = require('../models/Products')
 
module.exports ={
    async create(req, res){
        
        try{
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
    await Product.create(product)
    res.status(200).json({message: 'protudo adicionado com sucesso'})
            
        }
        catch(error){
            console.log(error)
            res.status(500).json({error: error})
        }
    }
 }