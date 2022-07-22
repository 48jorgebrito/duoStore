import axios from "axios";

const Api = axios.create({
    baseURL: 'http://localhost:8081'
})
export default Api

export const createdUser = async(nameUser, password ) => {
    return Api.post("/user", (nameUser, password))
    
}