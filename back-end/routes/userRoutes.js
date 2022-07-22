const express = require('express')
const router = express.Router()
const User = require('../models/Users')

// ROTA DE POST

router.post('/', async (req, res) => {
    const {nameUser, password} = req.body
    
    const user = await User.findOne({nameUser, password})
    if(user) {
        return (
            res.status(200).json({user : user})
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