import axios from "axios";

export const Api = axios.create({
    baseURL: 'http://localhost:8081'
})

export const createSession = async(nameUser, password) =>{{
    return Api.post('/storesessions', {nameUser, password})
}}