import axios from "axios";

export const ApiTeste = axios.create({
    baseURL: 'http://localhost:8081'
})

export const createSession = async (nameUser, password) => {
    return ApiTeste.post("/user", (nameUser, password))

}