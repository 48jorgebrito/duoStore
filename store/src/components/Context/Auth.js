import React, { createContext, useState, useEffect, } from "react"
import { useNavigate } from "react-router-dom"
import { Api, createSession } from "../../config/Api"
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [dataUser, setDataUser] = useState([])
    
    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')
        const token = localStorage.getItem('token')
        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser))
            Api.defaults.headers.Authorization = `Bearer ${token}`
        }

        
        setLoading(false)
    },[])
    
    useEffect(()=>{
        
        if(user){
     
             (async() => {
         
                 await Api.get(`/cadastro/${user.id}`).then((response)=>{
         
                     setDataUser(response.data)
         
                     
                 })
                 
             })()
             
         }

    })
    /* Função de Login*/
    const login = async (email, password) =>{
    
    const response = await createSession(email, password) 
    const loggeUser = response.data.user
    const token = response.data.token

    localStorage.setItem('user', JSON.stringify(loggeUser))
    localStorage.setItem('token', token)
    
    
        setUser(loggeUser)
        navigate("/conta")
        
   
}
/* Função de Logout*/
const logout = () =>{
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setUser(null)
    navigate("/login")
}


    return(
        <AuthContext.Provider value={
            {
                authenticated: !!user, 
                user,
                loading, 
                login, 
                logout,
                dataUser
                
            }
            }> 
            {children}
        </AuthContext.Provider>
    )
} 