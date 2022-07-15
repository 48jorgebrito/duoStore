const multer  = require('multer')

//USANDO PATH PARA PEGAR A EXTENSÃO DO ARQUIVO 
const path = require('path')

//UUID SERVE PARA GERAR NUMEROS ALEATORIOS
const  {  v4 : uuidv4  }  =  require ( 'uuid' )

module.exports = {


  storage: multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname ,'..', 'uploads'))
    },
    filename: (req, file, cb) => {
        const fileName =  uuidv4() + file.originalname
        cb(null, fileName)
      },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    const allowedMimes =[
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif'  
    ]
    if(allowedMimes.includes( file.mimetype)){
        cb(null, true)
    }else{
        cb(new Error('invalid file type'))
    }
  },

}
