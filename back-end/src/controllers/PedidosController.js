const Pedidos = require("../models/Pedido")
const FinalUsers = require('../models/FinalUsers')
const axios = require("axios");
module.exports ={
    
    async list(req, res){
        try{
           const {user_id} = req.params
           const user = await FinalUsers.findById(user_id)
            if(!user){
                return res.status(404).json({message: "usuario não existe"})
            }
            
            const pedidos = await Pedidos.find({
                userId:user_id 
            })
            return res.status(200).json(pedidos)

        }catch(error){
            console.log(error)
            res.status(401).json({erro : error})
        }
    },

    async create(req, res){
        try{
            const {user_id} = req.params
            const responseAddres = await axios.get(`http://localhost:8081/cadastro/${user_id}`)
            const user = await FinalUsers.findById(user_id)
            if(!user){
                return res.status(404).json({message: "usuario não existe"})
            }
            const {cep, destinat, rua, numero, complemento, bairro, cidade, uf} =  responseAddres.data.addres
            const {pagamentType, valorTotal, itens} = req.body
            const listPedido = await Pedidos.find()  
            const numberPedido = listPedido.length + 1
            

            const pedido = await Pedidos.findOne({
                userId: user_id,
                numeroPedido: numberPedido
            })
            
            if(pedido){
                return res.status(404).json({message:"pedido ja existe"})
            }

            const pedidos = await Pedidos.create({
                userId:user_id,
                numeroPedido: numberPedido,
                pagamentType,
                valorTotal,
                itens:JSON.parse(itens),
                addres:{     
                    cep,
                    destinat,
                    rua,
                    numero,
                    complemento,
                    bairro,
                    cidade,
                    uf,
                }

            })
            

            res.status(200).json({message: "pedido efetuado com sucesso"})

        }catch(error){
            console.log(error)
            res.json({erro:error})
        }


    },
    async pedidoList(req, res){
        const lista = await Pedidos.find()
        
        res.status(201).json(lista)
    }

}