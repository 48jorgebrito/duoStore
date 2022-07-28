const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    nameUser: {
        type: String,
        required: true,
        index : {
            unique: true
        }
    },
    password: String
          
},
{
    timestamps:true
}
)

module.exports = mongoose.model('User', Users)