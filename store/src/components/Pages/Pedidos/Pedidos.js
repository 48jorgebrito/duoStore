import './Pedidos.css'
import HeaderPages from '../../layout/HeaderPages/HeaderPages'
import { Api, pedidosList } from '../../../config/Api'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/Auth'

export default function Pedidos(){


    const{dataUser} = useContext(AuthContext) 
    const [listPedidos, setListPedidos] = useState([])
   
    const pedidos = listPedidos.filter((item)=>item.userId === dataUser._id )
 
      useEffect( ()=>{
        
       let load = async ()=>{
          let response =  await Api.get(`/pedido`)
          setListPedidos(response.data)
               
        }
        load()
        
        
       },[])
       
        
       
    return(
        <div className="container_pedidos">
             <HeaderPages/>
             {
                pedidos.map((pedido) =>(
                    <div key={pedido._id}>
                        <p>{`N - ${pedido.numeroPedido}`}</p>
                        <p>{`R$ ${pedido.valorTotal}`}</p>
                        <br/>
                    </div>
                ))
             }
            
            
        </div>
    )
}