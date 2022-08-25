import React, { createContext, useState, useEffect, } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
   
    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')
        
        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser))
            
        }
        setLoading(false)
    },[])
    /* Função de Login*/
    const login = (email, password) =>{
    
    
    const loggeUser = {id:"123", email}
    
    localStorage.setItem('user', JSON.stringify(loggeUser))
    
    if(password === "secret"){
        setUser({id:"123", email})
        navigate("/conta")
    }
    console.log(loggeUser)
}
/* Função de Logout*/
const logout = () =>{
    localStorage.removeItem('user')
    setUser(null)
    navigate("/login")
}


    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}> 
            {children}
        </AuthContext.Provider>
    )
} 