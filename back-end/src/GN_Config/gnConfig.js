require('dotenv').config({path: '../../.env'})
const https = require("https");
const axios = require("axios");
const fs = require("fs");
const path = require('path')

const express = require('express');
const { route } = require('../routes/FinalUsers');
const router = express.Router()


//Certificado .p12 
const certificado = fs.readFileSync(path.resolve(__dirname, `../certs/${process.env.GN_CERTIFICATION}`));

//Insira os valores de suas credenciais em desenvolvimento do pix
const credenciais = {
  client_id: process.env.CLIENT_ID_DEV,
  client_secret: process.env.CLIENT_SECRET_DEV
};

const data = JSON.stringify({ grant_type: "client_credentials" });
const data_credentials = `${credenciais.client_id}:${credenciais.client_secret}`

// Codificando as credenciais em base64
const auth = Buffer.from(data_credentials).toString("base64");

const agent = new https.Agent({
  pfx: certificado,
  passphrase: "",
});
  
router.get('/pagamento', async(req, res)=>{

  const authResponse = await axios({
     method: "POST",
     url: `${process.env.URL_BASE}/oauth/token`,
     headers: {
       Authorization: "Basic " + auth,
       "Content-Type": "application/json",
     },
     httpsAgent: agent,
     data: data,
   })

     const accessToken = authResponse.data?.access_token
     
    
     const reqGN = axios.create({
       baseURL: process.env.URL_BASE,
       httpsAgent: agent,
       headers:{
         Authorization: `Bearer ${accessToken}`,
         "Content-Type": "application/json",
       }

     });

    
     const dataCob = {
       calendario: {
         expiracao: 3600
       },
       valor: {
         original: "100.00"
       },
       chave: "71cdf9ba-c695-4e3c-b010-abb521a3f1be",
       solicitacaoPagador: "Valor total do seu pedido"
     }
     
   
     const cobResponse = await reqGN.post("/v2/cob", dataCob)
     const qrcodeResponse = await reqGN.get(`/v2/loc/${cobResponse.data.loc.id}/qrcode`)
     
     res.json(qrcodeResponse.data)

  
})

   module.exports = router