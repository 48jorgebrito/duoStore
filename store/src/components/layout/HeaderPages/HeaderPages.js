import './HeaderPages.css'
import Logo from '../../images/DuoLogo.png'
import {Link} from 'react-router-dom'
export default function HeaderPages(){
    return(
        <div className='HeaderPages'>
            <Link className='logo' to='/'>
                <img src={Logo}/>
            </Link>
            <div className='ContactData'>
                <p>(98) 98785-3267</p>
                <p>jorgeramirobrito19@gmail.com</p>
                <p>segunda a sexta das 9h as 18h</p>
            </div>
        </div>
    )
}