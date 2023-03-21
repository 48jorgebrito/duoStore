const mongoose = require('mongoose')

const {Schema} = mongoose

const pedidosSchema = new Schema({
        
        userId: String,
        numeroPedido: Number,
        pagamentType: String,
        valorTotal: Number,
       itens:{
            namePedido:String,
            size: String,
            sex: String,
            price:Number,
            url: String
       },
        addres:{     
            cep: Number,
            destinat: String,
            rua: String,
            numero: Number,
            complemento: String,
            bairro: String,
            cidade: String,
            uf: String,
        }
       
}, {
    timestamps: true
})

module.exports = mongoose.model("Pedidos", pedidosSchema)