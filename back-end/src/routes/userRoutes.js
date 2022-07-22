const express = require('express')
const { create } = require('../models/Users')
const router = express.Router()
const User = require('../models/Users')

// ROTA DE POST

router.post('/', async (req, res) => {
    const {nameUser, password} = req.body
    
    const user = await User.findOne({nameUser, password})
    if(user) {
        return (
            res.status(422).json({users:user})
        )
    }
    
    
    const newUsers = {
        nameUser,
        password
    }

    await User.create(newUsers)
    .then(()=>{res.status(200).json({user: newUsers})})
    .catch((error)=>{
        res.status(400).json({error:error})

    })
    
} )
 

// ROTA DE GET

router.get('/', async (req, res)=>{
    const results = await User.find()

    res.status(200).json(results)
})

module.exports = router