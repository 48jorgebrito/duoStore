///

import axios from 'axios'

export const apiAddres = axios.create({
    baseURL : "https://viacep.com.br/ws"
})