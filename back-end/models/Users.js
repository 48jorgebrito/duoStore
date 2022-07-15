const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    user: String,
    password: String
})

module.exports = mongoose.model('User', Users)