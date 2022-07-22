const User = require('../models/Users')

module.exports = {
    async list(req, res){
        try{
            const user = await User.find()

            if(!user){
                return res.status(402).json({message: "não existe nehum Usuario"})
            }

            return res.status(200).json(user)
        }
        catch(error){
            console.log(error)
            res.status(500).json()
        }
    },

    async show(req, res){
        try{
            const {id} = req.params
            const user = await User.findById({_id: id})

            if(!user){
                return res.status(402).json({message: " este Usuario não existe"})
            }

            return res.status(200).json(user)
        }
        catch(error){
            console.log(error)
            res.status(500).json()
        }
    },

    async create(req, res){
        try{
            const {nameUser, password} = req.body
            const user = await User.findOne({nameUser, password})
            if(user) {
                return (
                    res.status(402).json({messagge:`o Usuario  ${nameUser} ja foi cadastrado`})
                )
            }
            const newUsers = await User.create({
                nameUser,
                password
            })
            res.status(200).json(newUsers)
        }
        catch(error){
            console.log(error)
            res.status(500).json()    

        }
    },

    async update(req, res){
        try{
            const {id} = req.params
            const {nameUser, password} = req.body
            
            
            const user = await User.findById({_id : id})

            if(!user){
                return res.status(404).json({message: 'usuario não existe'})
            }
            await User.updateOne({
                nameUser,
                password
                
            })

            res.status(200).json({message: 'usuario atualizado com sucesso'})
        }
        catch(error){
            console.loq(error)
            res.status(500).json({error: error})
        }
        },

    async destroy(req, res){
        try{
            const {id} = req.params
            const user = await User.findById({_id : id})
           
            if(!user){
                return res.status(404).json({message: 'usuario não existe'})
            }

            await User.deleteOne(user)

            res.status(200).json({message: 'usuario deletado com sucesso'})
        }
        catch(error){
            console.log(error)
            res.status(500).json()    

        }
    }
}