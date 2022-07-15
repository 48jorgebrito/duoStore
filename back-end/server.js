const express = require("express");
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const app = express()
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes')
const path = require('path')

//APP USE
app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, 'uploads')))

//APP USE ROTAS
app.use('/products', productRouter)
app.use('/user', userRouter)






//CONECTANDO O SERVIDOR AO BANCO DE DADOS

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.k4p4n.mongodb.net/storeespotesapi?retryWrites=true&w=majority`).then(()=>{
    app.listen(8081)
    console.log('conectado com sucesso')
}).catch((err)=>{
  console.log(err)
})


