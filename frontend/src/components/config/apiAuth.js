import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8081'
})

export const createSession = async(nameUser, password) =>{{
    return api.post('/sessions', {nameUser, password})
}}
