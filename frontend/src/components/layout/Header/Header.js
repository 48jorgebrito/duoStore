import './Header.css'
import { Link } from "react-router-dom"

import { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth'

export default function Headers(){
   
    
    const {logout} = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }
    return(
        <div className='header'>
            <div className='container-header'>
                <h1 className='logo'>
                    FutStore 
                </h1>
                <button onClick={handleLogout}>Sair</button>
                <Link to="post">
                    <button >Add Produto</button>
                </Link>

            </div>

        </div>
    )

}