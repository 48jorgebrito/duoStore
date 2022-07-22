const express = require('express')
const router = express.Router()
const User = require('../models/Users')

// ROTA DE POST

router.post('/', async (req, res) => {
    const {nameUser, password} = req.body
    
    const user = await User.findOne({nameUser})
    if(user) {
        return (
<<<<<<< HEAD
            res.status(200).json({user : user})
=======
            res.status(422).json({message: `User ${nameUser} already  exists.`})
>>>>>>> parent of 85dee53 (aprimorando sistema de login)
        )
    } 
    res.json({message: "usuario não encontrado"})
    
} )
 

// ROTA DE GET

router.get('/', async (req, res)=>{
    const results = await User.find()

    res.status(200).json(results)
})

module.exports = router