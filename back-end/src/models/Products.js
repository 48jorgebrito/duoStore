const mongoose = require('mongoose')

const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const Products = new mongoose.Schema({
  url: String,
  grupo: String,
  categoria: String,
  subCategoria: String,
  name: String,
  size: String,
  sex: String, 
  qntd: Number,
  precoCusto: Number,
  margemLucro: Number,
  price:String
    
})

/*Products.pre('remove', function() {
  return(
    promisify(fs.unlink)(path.resolve(__dirname ,'..', '..', 'uploads', this.filename))
  )
    
})*/

module.exports = mongoose.model('Product', Products)