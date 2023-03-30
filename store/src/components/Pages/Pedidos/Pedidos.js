import './Pedidos.css'
import HeaderPages from '../../layout/HeaderPages/HeaderPages'
import { Api } from '../../../config/Api'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/Auth'


export default function Pedidos(){


    const{dataUser} = useContext(AuthContext) 
    const [listPedidos, setListPedidos] = useState([])
    
    const pedidos = listPedidos.filter((item)=>item.userId === dataUser._id )
   
    const listItens = pedidos.itens
    
    
    
      useEffect( ()=>{
        console.log(listItens)
    
       let load = async ()=>{
          let response =  await Api.get(`/pedido`)
          setListPedidos(response.data)
               
        }
        load()
        
        
       },[])
       
        const number = 0
       
    return(
        <div className="container_pedidos">
             <HeaderPages/>
             {
                pedidos.map((pedido) =>(
                    <div key={pedido._id}>
                        <p>{`N - ${pedido.numeroPedido}`}</p>
                        <p>{`R$ ${pedido.valorTotal}`}</p>
                        <p>{`Destinatario: ${pedido.addres.destinat}`}</p>
                        {
                            pedido.itens.map((item, index)=>(
                                <div key={index} className='box_listItens'>
                                    <img src={item.url}/>

                                    <p>{item.name}</p>
                                    <p>{item.size}</p>
                                    <p>{item.sex}</p>
                                    <p>{item.price}</p>

                                </div>
                                
                            ))
                        }
                        
                        
                        
                       
                        <br/>
                    </div>
                ))
             }
            
            
        </div>
    )
}