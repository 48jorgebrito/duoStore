import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from '../../components/Pages/Home/Home'
import Login from '../../components/Pages/Login/Login'
import Bag from '../../components/Pages/Bag/Bag';
import Cadastro from '../../components/Pages/Cadastro/Cadastro';
import Modal from '../../components/Pages/Modal/Modal';
import Conta from '../Pages/Conta/Conta';
import CheckoutEnd from '../Pages/CheckoutEnd/CheckoutEnd';
import Frete from '../Pages/Frete/Frete';
import Pagamento from '../Pages/Pagamento/Pagamento';
import ConfirmPedido from "../Pages/ConfirPedido/ConfirPedido";
import Pedidos from "../Pages/Pedidos/Pedidos";
import ListPedidos from "../Pages/ListPedidos/ListPedidos";

import { useContext } from "react";
import { AuthProvider, AuthContext } from "../Context/Auth";
import { CartProvider } from "../Context/CartContext";

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
                    <CartProvider>
                        <Routes>
                            <Route path='/' element={ <Home/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/bag' element={<Bag/>}/>
                            <Route path='/cadastro' element={<Cadastro/>}/>
                            <Route path='/modal' element={<Modal/>}/>
                            
                            {/*Rotas Privadas */}
                            <Route path='/conta' element={<Private> <Conta/> </Private> }/>
                            <Route path='/conta/pedidos' element={<Private> <Pedidos/> </Private> }/>
                            <Route path='/conta/ListPedidos' element={<Private> <ListPedidos/> </Private> }/>
                            <Route path='/checkout/endereco/edit' element={<Private> <CheckoutEnd/> </Private> }/>
                            <Route path='/checkout/endereco/frete' element={<Private> <Frete/> </Private> }/>
                            <Route path='/checkout/pagamento' element={<Private> <Pagamento/> </Private> }/>
                            <Route path='/checkout/pagamento/confirmacao' element={<Private> <ConfirmPedido/> </Private> }/>
                            
                            
                            
                        </Routes>
                    </CartProvider>
                </AuthProvider>
            </Router>
        </div>
    )
}