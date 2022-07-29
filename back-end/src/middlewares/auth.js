const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const secret = "ramiro13546"

module.exports = {
     async authToken(req, res, next){
        
        const authHeader = req.headers.authorization

        if(!authHeader){
            return res.status(401).json({error: "token was not provided"})
        }  

        const [, token] = authHeader.split(' ')

        try{
            const decoded = await promisify(jwt.verify)(token, secret)
            req.userId = decoded.id
             
            return next()
        }
        catch(error){
            return res.status(401).json({error: "token was not provided"})
        }
        
    }
}