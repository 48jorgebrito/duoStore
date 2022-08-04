const FinalUser = require('../models/FinalUsers')

const authHash = require('../services/PasswordHash')
module.exports = {
    async create (req, res){
        try{


            const {firstName, lastName, email, birthDate, sex, cpf, tel, password} = req.body
    
            const user = await FinalUser.findOne({email})
            if(user){
                return res.status(401).json({message: `O e-mail ${email} ja cadastrado!`})
            } 

            // create hash password 
            const passwordHash = await authHash.createPassword(password)
            
            const newUser = await FinalUser.create({
                firstName,
                lastName,
                email,
                birthDate,
                sex,
                cpf,
                tel,
                password: passwordHash
            })

            return res.status(200).json({message: 'Usuário cadastrado com sucesso'})
        }
        catch(error){
            res.status(404).json({erro: error})
        }
    },
    async list(req, res){
        try{
            const user = await FinalUser.find()
            
            if(user.length === 0 ){
                return res.status(401).json({message: "Não há usuários cadastrados"})
            }

            return res.status(200).json(user)
        }
        catch(error){
            res.status(404).json({erro: error})
        }
    },
    async show(req, res){
        try{
            const {id} = req.params
        const user = await FinalUser.findById(id)
            if(!user){
                return res.status(401).json({message: "Usuário não encontado"})
            }
                return res.status(200).json(user)
        }
        catch(error){
            res.status(404).json({erro: error})
        }
    }, 
    async update(req, res){
        
        try{
            const {id} = req.params
            const {firstName, lastName, email, birthDate, sex, cpf, tel, password} = req.body
            const user = await FinalUser.findById(id)
            
            if(!user){
                return res.status(401).json({message: "Usuário não encontado"})
            }
            const passwordHash = await authHash.createPassword(password)
            await FinalUser.updateOne({
                firstName,
                lastName,
                email,
                birthDate,
                sex,
                cpf,
                tel,
                password: passwordHash
        })  
        
            return res.status(200).json({message: "Usuário atualizado com sucesso"})
        }
        catch(error){
            res.status(404).json({erro: error})
        }
            
    },
    async destroy(req, res){
        try{
            const {id} = req.params
            const user = await FinalUser.findById(id)

            if(!user){
                return res.status(401).json({message: "Usuário não encontado"})
        }
            await FinalUser.deleteOne(user)

            return res.status(200).json({message: "Usuário excluído com sucesso"})
        }
        catch(error){
            res.status(404).json({erro: error})
        }

    }
}