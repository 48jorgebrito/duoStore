const Pedidos = require("../models/Pedido")
const FinalUsers = require('../models/FinalUsers')

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
            const {nome, numero} = req.body

            const user = await FinalUsers.findById(user_id)
            
            if(!user){
                return res.status(404).json({message: "usuario não existe"})
            }    
            const pedido = await Pedidos.findOne({
                userId:user_id,
                numero
            })
            if(pedido){
                return res.status(404).json({message:"pedido ja existe em sua lista"})
            }

            const pedidos = await Pedidos.create({
                userId : user_id,
                nome,
                numero

            })

            res.status(200).json({message: "pedido efetuado com sucesso"})

        }catch(error){
            console.log(error)
            res.json({erro:error})
        }


    } 
}