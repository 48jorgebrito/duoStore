const mongoose = require('mongoose')

const {Schema} = mongoose

const pedidosSchema = new Schema({
        
        userId: String,
        nome: String,
        numero: Number
       
}, {
    timestamps: true
})

module.exports = mongoose.model("Pedidos", pedidosSchema)