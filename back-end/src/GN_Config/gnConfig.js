const https = require("https");
const axios = require("axios");
const fs = require("fs");
require('dotenv').config()



console.log(process.env.URL_BASE)
//node gnConfig.js

/*
//Insira o caminho de seu certificado .p12 dentro de seu projeto
const certificado = fs.readFileSync(" caminho do certificado");

//Insira os valores de suas credenciais em desenvolvimento do pix
const credenciais = {
  client_id: process.env.CLIENT_ID_DEV,
  client_secret: process.env.CLIENT_SECRET_DEV,
};

const data = JSON.stringify({ grant_type: "client_credentials" });
const data_credentials = credenciais.client_id + ":" + credenciais.client_secret;

// Codificando as credenciais em base64
const auth = Buffer.from(data_credentials).toString("base64");

const agent = new https.Agent({
  pfx: certificado,
  passphrase: "",
});
//Consumo em desenvolvimento da rota post oauth/token
const config = {
  method: "POST",
  url: "https://api-pix-h.gerencianet.com.br/oauth/token",
  headers: {
    Authorization: "Basic " + auth,
    "Content-Type": "application/json",
  },
  httpsAgent: agent,
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data.access_token));
  })
  .catch(function (error) {
    console.log(error);
  });*/