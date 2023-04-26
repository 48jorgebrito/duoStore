const Product = require('../models/Products')

 
module.exports ={
    
    async create(req, res){
        
        try{
            const {grupo, categoria, subCategoria, name, size, sex, qntd, precoCusto, margemLucro, price,} = req.body
    
    
    if( req.file === undefined){
        console.log("selecione uma imagem")
        return
    }
    const {filename } = req.file
    const url = `http://localhost:8081/files/${filename}`
    
    const product = { 
        name,
        size,
        sex,
        url,
        grupo, 
        categoria, 
        subCategoria,
        qntd, 
        precoCusto, 
        margemLucro,
        price, 
        
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
    },

    async list(req, res){
        try{
            const resultsProduct = await Product.find()
            if(resultsProduct){
              return res.status(200).json(resultsProduct)
            }

            return res.status(402).json({message: "Não há nenhum produto adicionado na lista"})
        }
        catch(error){
            console.log(error)
            res.status(500).json({error: error})
        }
    },

    async show(req, res){
        const id = req.params.id 
         try{
             const product = await Product.findOne({_id: id})
     
             if(!product){
                 res.status(422).json({message: "usuario não encontrado"})
                 return
             }
             
            return res.status(200).json(product)
         }catch(error){
            console.log(error)
            res.status(500).json({error: error})
         }
        },
    async update(req, res){
         try{
    
        const id = req.params.id
    
        const {name, size, sex, price} = req.body
        
        const product = { 
            name,
            size,
            sex,
            price,
        }
    
           const updateProduct = await Product.updateOne({_id:id}, product) 
           res.status(200).json(product)
            if(updateProduct.matchedCount === 0){
                res.status(422).json({message: "O produto não foi encontrado"})
                return
            }
    
    
        }
        catch(error){
            console.log(error)
            res.status(500).json({error: error})
        }
    
    },
    async destroy(req, res){
        try{
        const id = req.params.id
        const product = await Product.findOne({_id:id})
    
        if(!product){
            res.status(422).json({message: "O Produto não existe"})
            return
        }
            await Product.deleteOne({_id:id})
    
            res.status(200).json({message: " O Produto foi excluido com sucesso"})
    
        }catch(error){
            console.log(error)
            res.status(500).json({error: error})
        }
    }
    
 }