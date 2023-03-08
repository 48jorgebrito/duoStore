import "./Login.css"
import { useForm } from "react-hook-form"

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useContext } from "react";
import { AuthContext } from "../../context/auth";

import Logo from "../../images/DuoLogo.png"

const validationPost = yup.object({
    nameUser: yup.string().required("Informe o nome de usuário"),
    password: yup.string().required("Infome sua senha")

  }).required();

export default function Login(){
  //  const navigate = useNavigate()
    
    const{register, handleSubmit, formState :{errors}} = useForm({
        resolver:yupResolver(validationPost)
    })

    const {login} = useContext(AuthContext) 


    const onSubmit =  (data) => {
        const nameUser = data.nameUser
        const password = data.password 
        
        login(nameUser, password)
        
    }
    return(
        <div className="containerLogin">

            <div className='logo'>
                <img src={Logo} alt='logo'/>    
            </div>

            
           
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="userData">
                    
                    <input  type="text" name="nameUser" id="nameUser" placeholder="
                    Nome de usuario"  {...register("nameUser")}/>
                    <p>{errors.nameUser?.message}</p>
                </div>
                <div className="userData">
                   
                    <input  type="password" name="password" id="password" placeholder="Senha" {...register("password")}/>
                    <p>{errors.password?.message}</p>
                </div>
                <button type="submit">Entrar</button>

            </form>

        </div>
    )
}
