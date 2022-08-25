import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from '../../components/Pages/Home/Home'
import Login from '../../components/Pages/Login/Login'
import Bag from '../../components/Pages/Bag/Bag';
import Cadastro from '../../components/Pages/Cadastro/Cadastro';
import Modal from '../../components/Pages/Modal/Modal';
import Conta from '../Pages/Conta/Conta';

import { useContext } from "react";
import { AuthProvider, AuthContext } from "../Context/Auth";

export default function AppRoutes(){

    const Private = ({children}) =>{
        const {authenticated, loading} = useContext(AuthContext)

        if(loading){
          return <div className="loading">Carregando...</div>  
    }

        if( !authenticated){
            return <Navigate to='/login'/>
       }
       return children
    }

    return(
        <div className="appRoutes">
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path='/' element={ <Home/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/bag' element={<Bag/>}/>
                        <Route path='/cadastro' element={<Cadastro/>}/>
                        <Route path='/modal' element={<Modal/>}/>
                        
                        {/*Rotas Privadas */}
                        <Route path='/conta' element={<Private> <Conta/> </Private> }/>
                        
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    )
}