import './Header.css'
import { Link } from "react-router-dom"
import Logo from "../../images/DuoLogo.png"
import { useContext} from 'react'
import { AuthContext } from '../../context/auth'

export default function Headers(){
   
    
    const {logout} = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }
    return(
        <div className='header'>
            <div className='container-header'>
                
                <div className='logo'>
                    <img src={Logo} alt='logo'/>    
                </div>

                <Link to="post">
                    <button >Add Produto</button>
                </Link>
                <button onClick={handleLogout}>Sair</button>

            </div>

        </div>
    )

}