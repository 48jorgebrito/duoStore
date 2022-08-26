const jwt = require("jsonwebtoken")
const passwordHash = require('../services/PasswordHash')
const secret = "ramiro13546"
const FinalUser = require('../models/FinalUsers')

module.exports = {
    async create(req, res){
        const {email, password} = req.body
        const user = await FinalUser.findOne({email})
        
        if(!user){
           return res.status(401).json({error: 'User/ password invalid'})
        }

    
       const checkPassword = await passwordHash.checkPassword(user, password)
       
        
        if(!checkPassword){
            return res.status(401).json({error: 'User/ password invalid'})
        }
        
        
       const {id} = user

      

       return res.json({
            user:{
                id,
                email

            },
            token: jwt.sign({
                id
            },
            secret,
            {
                expiresIn: "1y",
                subject: "1"
            })
        })
        
    }
}