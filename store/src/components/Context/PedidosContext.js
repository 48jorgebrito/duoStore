import { createContext } from "react";
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../Context/Auth'
import { Api } from "../../config/Api";

export const PedidosContext = createContext()

export const PedidosProvider = ({children}) =>{
   
    const {dataUser} = useContext(AuthContext)
    const [listPedidos, setListPedidos] = useState([])
    const pedidos = listPedidos.filter((item)=>item.userId === dataUser._id )
   
    const lestPedido = pedidos.map((obj, index) => index === pedidos.length - 1 ? obj : null).filter(obj => obj !== null);
    const confirmPedido = listPedidos.map((obj, index) => index === listPedidos.length - 1 ? obj : null).filter(obj => obj !== null);

    useEffect( ()=>{
        let load = async ()=>{
            let response =  await Api.get(`/pedido`)
            setListPedidos(response.data)
          
        } 
        
        load()
        
    },[])

    
    
   
   
    return(
        <PedidosContext.Provider value={
            {
                pedidos,
                lestPedido, 
                confirmPedido
            }
        }>
            {children}
        </PedidosContext.Provider>
    )
}