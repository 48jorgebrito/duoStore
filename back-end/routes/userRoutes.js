const express = require('express')
const router = express.Router()
const User = require('../models/Users')

// ROTA DE POST
router.post('/', async (req, res) => {
    const {user, password} = req.body

    const users = {
        user,
        password
    }

    await User.create(users)
    .then(()=>{res.status(200).json({message: 'usuário cadastrado com sucesso'})})
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