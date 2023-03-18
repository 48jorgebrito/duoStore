require('dotenv').config({path: '../../.env'})
const https = require("https");
const axios = require("axios");
const fs = require("fs");
const path = require('path')



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
  

const authenticate =  () =>{
  
  return  axios({
    method: "POST",
    url: `${process.env.URL_BASE}/oauth/token`,
    headers: {
      Authorization: "Basic " + auth,
      "Content-Type": "application/json",
    },
    httpsAgent: agent,
    data: data,
  })
}



    const GNRequest = async ()=>{
     
    const authResponse = await authenticate()  
    const accessToken =  authResponse.data?.access_token
       
   return axios.create({
         baseURL: process.env.URL_BASE,
         httpsAgent: agent,
         headers:{
           Authorization: `Bearer ${accessToken}`,
           "Content-Type": "application/json",
         }
  
       });

     } 
module.exports = GNRequest
    
    
     

  


