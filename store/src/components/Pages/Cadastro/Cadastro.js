import './Cadastro.css'
import HeaderPages from '../../layout/HeaderPages/HeaderPages'
import FooterPage from '../../layout/FooterPage/FooterPage'
import { useNavigate } from 'react-router-dom'
import {useForm}  from 'react-hook-form'
import { Api } from '../../../config/Api'

// IMPORTANDO O YUP RESOLVER PARA VALIDAR O FORMULARIO
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validationPost = yup.object({
    firstName: yup.string().required("Campo obrigatorio"),
    lastName: yup.string().required("Campo obrigatorio"),
    email: yup.string().required("Campo obrigatorio"),
    birthDate: yup.string().required("Campo obrigatorio"),
    sex: yup.string().required("Campo obrigatorio"),
    cpf: yup.string().required("Campo obrigatorio"),
    tel: yup.string().required("Campo obrigatorio"),
    password: yup.string().required("Campo obrigatorio"),
    
  }).required();


export default function Cadastro(){
    
    let navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver:yupResolver(validationPost)
    })

    const onSubmit = async (data) => {
        
        await Api.post('/cadastro', data)
        .then(()=>{
            navigate('/modal')
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return(
        <div className='Cadastro'>
                <HeaderPages/>
            <div className='CadastroContainer'> 
                <h1>Insira seus Dados </h1>
                
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='BoxUser'>
                        <div className='DataLeft'>
                            <label>Nome</label>
                            <input type='text' name='firstName' {...register('firstName')}/>
                            <p className="error-message">{errors.firstName?.message}</p>
                        </div>
                        <div className='DataRight'>
                            <label>Sobrenome</label>
                            <input type='text' name='lastName' {...register('lastName')}/>
                            <p className="error-message">{errors.lastName?.message}</p>
                        </div>
                    </div>

                    <div className='Email'>
                        <label>Email</label>
                        <input type='email' name='email' {...register('email')}/>
                        <p className="error-message">{errors.email?.message}</p>
                    </div>
                    <div className='BoxUser'>
                        <div className='DataLeft'>
                            <label>Data de nascimento</label>
                            <input type='date' name='birthDate' {...register('birthDate')}/>
                            <p className="error-message">{errors.birthDate?.message}</p>
                        </div>

                        <div className='DataRight'>
                            <label>Sexo</label>
                            <select name='sex' {...register('sex')}>
                                <option>Feminino</option>
                                <option>Masculino</option>
                            </select>
                        </div>

                    </div>

                    <div className='BoxUser'>
                        <div className='DataLeft'>
                            <label>CPF</label>
                            <input type="text" name="cpf" {...register('cpf')}/>
                            <p className="error-message">{errors.cpf?.message}</p>
                        </div>
                        <div className='DataRight'>
                            <label>Telefone</label>
                            <input type='tel' name='tel' {...register('tel')}/>
                            <p className="error-message">{errors.tel?.message}</p>
                        </div>
                    </div>
                    <div className='Password'>
                        <label>Senha</label>
                        <input type='password' name='password' {...register('password')}/>
                        <p className="error-message">{errors.password?.message}</p>
                    </div>
                    
                    <button className='BtnCadastro' type='submit'>Cadastrar</button>

                </form>
            </div>
            <FooterPage/>
        </div>
    )
}