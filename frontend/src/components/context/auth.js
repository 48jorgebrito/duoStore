import React, { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ApiTeste, createSession } from "../config/apiTeste"

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
const navigate = useNavigate()
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

useEffect(()=>{
    const recoveredUser = localStorage.getItem('user')
    
    if(recoveredUser){
        setUser(JSON.parse(recoveredUser))
    }

    setLoading(false)
},[])

const login = async (nameUser, password) =>{
    
    const response = await createSession(nameUser, password)

   console.log('login', response.data)
 
   //api criar session

   const loggedUser = response.data.user

   localStorage.setItem('user', JSON.stringify(loggedUser))

   
        setUser(loggedUser)
        navigate('/')
    
    
    
}
const logout = ()=>{
    console.log('logout')
    localStorage.removeItem('user')
    setUser(null)
    navigate("/login")
}

    return(
        <AuthContext.Provider value={{authenticated: !!user, user,loading, login, logout
        }}>
            {children}    
        </AuthContext.Provider>
    )
}