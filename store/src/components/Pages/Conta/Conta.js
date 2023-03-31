import './Conta.css'
import FooterPage from '../../layout/FooterPage/FooterPage'
import { AiOutlineUser } from "react-icons/ai"
import { BiCabinet } from "react-icons/bi"
import { FiUser } from "react-icons/fi"
import { useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/Auth'
import HeaderPages from "../../layout/HeaderPages/HeaderPages"
export default function Conta(){
    
    
    const {logout, dataUser, addresDataUser} = useContext(AuthContext)
    
    const{rua, numero, bairro, complemento, cep, cidade, uf } = addresDataUser
    
    const navigate = useNavigate()
    const derection = ()=>{
        navigate('/conta/ListPedidos')
    }
    const derectionPedidos = ()=>{
        navigate('/conta/pedidos')
    }
   
  
    

    return(
        <div className="Count">
            <HeaderPages/>
            
            <div className="CountContainer">
                <div className="SideMenu">
                    
                        <div className='BoxIcons' >
                            <FiUser className='Icons active'/> 
                            <p>INFORMAÇÕES</p> 
                        </div> 
                         <div className='BoxIcons' onClick={derection}> 
                            <BiCabinet className='Icons'/> 
                            <p>PEDIDOS</p> 
                        </div> 
                   
                    <button className='Logout' onClick={ logout }>Sair da conta</button>
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
                                {addresDataUser.length == 0?
                                    <p>Nenhum endereço cadastrado</p>

                                 :  
                                 
                                    <p>{`Cep ${cep}, ${rua}, ${numero}, ${complemento}, ${bairro} - ${cidade}/${uf}, `}</p> 
                                }
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
            <FooterPage/>
        </div>
    )
}