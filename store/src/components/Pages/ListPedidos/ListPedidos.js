import './ListPedidos.css'
import HeaderPages from '../../layout/HeaderPages/HeaderPages'
import { Api } from '../../../config/Api'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/Auth'
import FooterPage from '../../layout/FooterPage/FooterPage'


import { BiCabinet } from "react-icons/bi"
import { FiUser } from "react-icons/fi"
import { useNavigate } from 'react-router-dom'
import {VscClose} from 'react-icons/vsc'




export default function PedidosList(){
    
    
    const {logout} = useContext(AuthContext)
    const navigate = useNavigate()
    const derection = ()=>{
        navigate('/conta')
    }
    
    
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
    
    const[modal, setModal] = useState(false)
    const openCloseModal = ()=>{
        setModal(!modal)
        
    }

    const[pedidoSingle, setPedidoSingle] = useState([])
    const pedidoItens = (pedido)=>{
        setPedidoSingle(pedido)
    }

    

    return(
        <div className="pedidosList">
            <HeaderPages/>
            <div className={`container-ModalPedido ${modal !== true? 'close': ' '}`} >
                <div className='modalPedido'>
                    <VscClose className='closeModal' onClick={openCloseModal}/>
                    
                    <div className='pedidoHeader'>
                            <BiCabinet className='icon'/>
                        <div className='descriptionpedido'>
                            <h3>{`Pedido N° ${pedidoSingle.numeroPedido}`}</h3>
                            <p>{pedidoSingle.createdAt}</p>
                        </div>
                    </div>
                    {pedidoSingle.length !== 0?
                            pedidoSingle.itens.map((item)=>(
                                <div key={item._id} className='box_listItens'>
                                    <div className='box-img'>
                                        <img src={item.url}/>
                                    </div>
                                    
                                    <div>
                                        <h4>{`${item.name} / sex: ${item.sex} / tamanho: ${item.size}`}</h4>
                                        <p>{item.price}</p>
                                    </div>

                                </div>
                                
                            ))
                            : ''
                        }
                    
                    
                    
                </div>
            </div>
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

                        <div className="InfoPedidos">
                        <h1>PEDIDOS</h1> 
                {
                    pedidos.map((pedido)=>(
                        <div className='pedidosSingle' key={pedido._id} onClick={()=>{
                            openCloseModal()
                            pedidoItens(pedido)
                        }} >
                                <div className='pedidosSingle-left'>
                                    <BiCabinet className='icons'/>
                                    <div>
                                        <h3>{`N ${pedido.numeroPedido}`}</h3>
                                        <p>{` ${pedido.createdAt}`}</p>
                                    </div>

                                </div> 
                                <div className='pedidosSingle-right'>
                                    <h3>{`R$ ${pedido.valorTotal}`}</h3>
                                    <p>{`itens ${pedido.itens.length}`}</p>
                                </div> 
                                
                        </div>
                    ))
                }
                </div>
            </div>
            <FooterPage/>
        </div>
    )
}