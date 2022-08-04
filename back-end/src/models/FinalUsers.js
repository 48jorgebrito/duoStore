const mongoose = require('mongoose')

const FinalUsers = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:String,
    birthDate : Date,
    sex: String,
    cpf: Number,
    tel: Number,
    password: String
    
},
{
    timestamps: true
}
)

module.exports = mongoose.model('FinalUser', FinalUsers )