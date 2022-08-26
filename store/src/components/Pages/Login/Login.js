import './Login.css'
import HeaderPages from '../../layout/HeaderPages/HeaderPages'
import { AiOutlineUser } from "react-icons/ai"
import { Link } from 'react-router-dom'
import FooterPage from '../../layout/FooterPage/FooterPage'

import {useForm} from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '../../Context/Auth'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const validationPost = yup.object({
    email: yup.string().required("Informe o nome de usuário"),
    password: yup.string().required("Infome sua senha")
    }).required();


export default function UserLogin(){

    const {authenticated, login} = useContext(AuthContext)

    const{register, handleSubmit, formState :{errors}} = useForm({
        resolver:yupResolver(validationPost)
    })
    
    const onSubmit = (data) =>{
        const email = data.email
        const password = data.password
            
        login(email, password)
    }

    return(
        <div className='Login'>
                <HeaderPages/>
            <form className='LoginContainer' onSubmit={handleSubmit(onSubmit)}>
                <div className='LoginAvatar'>< AiOutlineUser/></div>
                    <h1>Seja bem-vindo(a)!</h1>
                    
                <div className='DatasUser'>
                    <label>Insira seu E-mail</label>
                    <input type='email' {...register('email')}/>
                    <p>{errors.email?.message}</p>
                </div>
                <div className='DatasUser'>
                    <label>Senha</label>
                    <input type='password' {...register("password")}/>
                    <p>{errors.password?.message}</p>
                </div>
                <div className='BtnLogin'>
                    <Link className='BtnCreate' to='/cadastro'>Criar Conta</Link>    

                    <button type='submit'>Entrar</button>
                </div>
            </form>
            <FooterPage/>
        </div>
    )
}