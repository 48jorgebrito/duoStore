import './Conta.css'
import { AiOutlineUser } from "react-icons/ai"
import { BiCabinet } from "react-icons/bi"
import { FiUser } from "react-icons/fi"
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/Auth'
import HeaderPages from "../../layout/HeaderPages/HeaderPages"
import { Api } from '../../../config/Api'
export default function Conta(){
    
    
    const {logout, dataUser} = useContext(AuthContext)
    
   
  
    

    return(
        <div className="Count">
            <HeaderPages/>
            <div className="CountContainer">
                <div className="SideMenu">
                    
                        <div className='BoxIcons'>
                            <FiUser className='Icons'/> 
                            <p>INFORMAÇÕES</p> 
                        </div> 
                         <div className='BoxIcons'>
                            <BiCabinet className='Icons'/> 
                            <p>PEDIDOS</p> 
                        </div> 
                   
                    <button className='Logout' onClick={logout}>Sair da conta</button>
                </div>

                <div className="InfoCount">
                   <h1>INFORMAÇÕES DA SUA CONTA</h1> 
                   <div className='InfoCountContainer'>
                        <div className='UserDatas'>
                            <div className='UserAvatar'>< AiOutlineUser/></div>
                            <h4>{dataUser.firstName}</h4>
                            <p>{dataUser.email}</p>
                            <div className='BoxBtn'>
                                <button className='EditData'>Editar dados</button>
                                <button className='EditPassword'>Alterar senha</button>
                            </div>
                            <div className='LineGreen'></div>
                            <div className='BoxEnderess'>
                                <h3>Último endereço utilizado</h3>
                                <p>Avenida Mato Grosso, S/N Condomínio athenas,</p>
                            </div>
                        </div>
                        <div className='BoxPedido'>
                            <h3>Últimos pedidos</h3>
                            <div className='LineGreen'></div>
                            
                            <div className='NumPedido'>
                                <p>Nº 9585</p>
                                <p>R$ 656,35</p>
                            </div>
                            <div className='DatePedido'>
                                <p>21/02/2022 - 16:02:46</p>
                                <p>2 item</p>
                            </div>
                            <div className='FormPagam'>
                                <p>Boleto bancário</p>
                                <button className='Status'>Enviado</button>
                            </div>
                            <p>Acessar todos os pedidos</p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}