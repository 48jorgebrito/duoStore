const bcrypt = require('bcryptjs')

module.exports  = {
    
    async createPassword(password){
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }


}



