import './ListPedidos.css'
import HeaderPages from '../../layout/HeaderPages/HeaderPages'
import { Api } from '../../../config/Api'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/Auth'
import FooterPage from '../../layout/FooterPage/FooterPage'

import { AiOutlineUser } from "react-icons/ai"
import { BiCabinet } from "react-icons/bi"
import { FiUser } from "react-icons/fi"
import { useNavigate } from 'react-router-dom'





export default function PedidosList(){
    
    
    const {logout} = useContext(AuthContext)
    const navigate = useNavigate()
    const derection = ()=>{
        navigate('/conta')
    }
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
        <div className="pedidosList">
            <HeaderPages/>
            
            <div className="pedidosList-Container">
                <div className="SideMenu">
                    
                        <div className='BoxIcons' onClick={derection}>
                            <FiUser className='Icons'/> 
                            <p>INFORMAÇÕES</p> 
                        </div> 
                         <div className='BoxIcons'>
                            <BiCabinet className='Icons active'/> 
                            <p>PEDIDOS</p> 
                        </div> 
                   
                    <button className='Logout' onClick={ logout }>Sair da conta</button>
                </div>

                <div className="InfoCount">
                   <h1>PEDIDOS</h1> 
                   <div className='pedidosListContainer'>
                        
                        
                   </div>
                </div>
            </div>
            <FooterPage/>
        </div>
    )
}