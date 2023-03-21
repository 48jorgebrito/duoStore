import './HeaderPages.css'
import Logo from '../../images/DuoLogo.png'
import {Link} from 'react-router-dom'
import {RiWhatsappLine} from 'react-icons/ri'
import {MdOutlineMail} from 'react-icons/md'

export default function HeaderPages(){
    return(
        <div className='HeaderPages'>
            <Link className='logo' to='/'>
                <img src={Logo} alt='logo'/>
            </Link>
            <div className='ContactData'>
                <div className='contacts'>
                    <RiWhatsappLine className='icons'/><p>(98) 98885-7306</p>
                </div>    
                <div className='contacts'>
                    <MdOutlineMail className='icons'/>
                    <p>duoutlet@gmail.com</p>
                </div>    
                    <p>Segunda a sexta-feira: das 8:00 as 12:00 e das 14:00 as 19:00</p>
            </div>
        </div>
    )
}