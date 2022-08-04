const jwt = require("jsonwebtoken")
const User = require('../models/Users')
const passwordHash = require('../services/PasswordHash')
const secret = "ramiro13546"


module.exports = {
    async create(req, res){
        const {nameUser, password} = req.body
        const user = await User.findOne({nameUser})
        
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
                nameUser

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