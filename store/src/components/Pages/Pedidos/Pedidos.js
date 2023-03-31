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
       
        
       
    return(
        <div className="container_pedidos">
             <HeaderPages/>
             {
                pedidos.map((pedido) =>(
                    <div key={pedido._id}>
                        <p>{`PEDIDO N - ${pedido.numeroPedido}`}</p>
                        <p>{`${pedido.createdAt}`}</p>

                        {
                            pedido.itens.map((item, index)=>(
                                <div key={index} className='box_listItens'>
                                    <div className='box-img'>
                                        <img src={item.url}/>
                                    </div>
                                    
                                    <div>
                                        <h3>{`${item.name} / sex: ${item.sex} / tamanho: ${item.size}`}</h3>
                                        
                                        <p>{item.price}</p>
                                    </div>

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