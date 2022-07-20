const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    nameUser: String,
    password: String
})

module.exports = mongoose.model('User', Users)