import './FooterFeed.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import Logo from "../../images/DuoLogo.png"
import {MdOutlineMail} from 'react-icons/md'


export default function FooterFeed(){

    

    return(
        <div className='FooterFeed'>
            <div className='ContainerFooterFeed'>
            <div className='logo'>
                    <img src={Logo} alt='logo'/>
                    
                </div>
                <nav className='socialNetworks'>
                    <ul>
                        <h3>Acesso rapido</h3>
                        <li>Camisas</li>
                        <li>Bermudas</li>
                        <li>Carteiras</li>
                        <li>Bonés</li>
                        <li>Prmoções</li>
                        
                    </ul>
                    <ul>
                        <h3>Siga a Duo Outlet</h3>
                       
                        <li className='liksFooter' onClick={()=>{
                           window.location.href= 'https://www.instagram.com/duooutlet_/?next=%2F' 
                        }}>   
                            <FaFacebookF className='iconLiksFooter'/> Facebook   
                        </li>
                        <li className='liksFooter' onClick={()=>{
                           window.location.href= 'https://www.instagram.com/duooutlet_/?next=%2F' 
                        }}>   
                            <AiOutlineInstagram className='iconLiksFooter'/> Instagram   
                        </li>
                        <li className='liksFooter' onClick={()=>{
                           window.location.href= 'https://api.whatsapp.com/send?phone=5598988857306&text=Ol%C3%A1+%F0%9F%9B%8D' 
                        }}>   
                            <IoLogoWhatsapp className='iconLiksFooter'/> Whatsapp   
                        </li>
                        
                        
                    </ul>
                    <ul>
                        <h3>Atendimendo ao cliente</h3>
                        <li className='liksFooter' onClick={()=>{
                           window.location.href= 'https://api.whatsapp.com/send?phone=5598988857306&text=Ol%C3%A1+%F0%9F%9B%8D' 
                        }}>   
                            <MdOutlineMail className='iconLiksFooter'/> duoutlet@gmail.com  
                        </li>
                        
                        <li>Segunda a sexta-feira: das 8:00 as 12:00 e das 14:00 as 19:00</li>
                        
                        
                    </ul>
                </nav>
            </div>

        </div>
    )
}