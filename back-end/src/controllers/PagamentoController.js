require('dotenv').config({path: '../../.env'})
const GNRequest  = require('../GN_api/gnConfig')


//const reqGNAlready = GNRequest()   

module.exports = {
    

    async createCob(req, res){
      
      const reqGN = await GNRequest()
     // const reqGN = await reqGNAlready     
      const {valorCob} = req.body
      const dataCob = {
            calendario: {
              expiracao: 3600
            },
            valor: {
              original: valorCob
            },
            chave: "jorgeramirobrito19@outlook.com",
            solicitacaoPagador: "Valor total do seu pedido"
          }
        
  
          const cobResponse = await reqGN.post("/v2/cob", dataCob)
          const qrcodeResponse = await reqGN.get(`/v2/loc/${cobResponse.data.loc.id}/qrcode`)
          
          res.json(qrcodeResponse.data)
     
       
     }
}

 