import './Modal.css'
import HeaderPages from '../../layout/HeaderPages/HeaderPages'
import FooterPage from '../../layout/FooterPage/FooterPage'
import { GiConfirmed } from 'react-icons/gi'
import { Link } from 'react-router-dom'

export default function Modal(){
    return(
        <div className='Modal'>
            <HeaderPages/>
            <div className='ModalContainer'>
                <div className='ImgConfim'>
                    <GiConfirmed/>
                </div>
                <h1>Cadastrado(a) com Sucesso!</h1>
                <Link to='/login' className='BtnModal'> Fazer Login</Link>
            </div>
            <FooterPage/>
        </div>
    )
}