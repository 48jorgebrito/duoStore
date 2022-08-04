import './Login.css'
import HeaderPages from '../../layout/HeaderPages/HeaderPages'
import { AiOutlineUser } from "react-icons/ai"
import { Link } from 'react-router-dom'
import FooterPage from '../../layout/FooterPage/FooterPage'
export default function UserLogin(){

    
    return(
        <div className='Login'>
                <HeaderPages/>
            <div className='LoginContainer'>
                <div className='LoginAvatar'>< AiOutlineUser/></div>
                    <h1>Seja bem-vindo(a)!</h1>
                <div className='DatasUser'>
                    <label>Insira seu E-mail</label>
                    <input type='text'/>
                </div>
                <div className='DatasUser'>
                    <label>Senha</label>
                    <input type='password' />
                </div>
                <div className='BtnLogin'>
                    <Link className='BtnCreate' to='/cadastro'>Criar Conta</Link>    

                    <button type='submit'>Entrar</button>
                </div>
            </div>
            <FooterPage/>
        </div>
    )
}