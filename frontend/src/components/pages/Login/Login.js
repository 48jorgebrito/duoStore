import "./Login.css"
import { useForm } from "react-hook-form"
//import {useNavigate } from "react-router-dom";
import Api from "../../config/Api";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validationPost = yup.object({
    user: yup.string().required("Informe o nome de usuário"),
    password: yup.string().required("Infome o preço sua senha")

  }).required();

export default function Login(){
  //  const navigate = useNavigate()
    const{register, handleSubmit, formState :{errors}} = useForm({
        resolver:yupResolver(validationPost)
    })

    const onSubmit = async (data) => {
        await Api.get('/user', data)
        .then(()=>{
            console.log(data)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }
    return(
        <div className="containerLogin">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="userData">
                    <label htmlFor="user">Nome de usuário</label>
                    <input  type="text" name="user" id="user" {...register("user")}/>
                    <p>{errors.name?.message}</p>
                </div>
                <div className="userData">
                    <label htmlFor="password">Senha</label>
                    <input  type="password" name="password" id="password" {...register("password")}/>
                    <p>{errors.password?.message}</p>
                </div>
                <button type="submit">Entrar</button>

            </form>

        </div>
    )
}
