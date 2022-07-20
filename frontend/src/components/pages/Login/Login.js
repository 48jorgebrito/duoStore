import "./Login.css"
import { useForm } from "react-hook-form"
//import {useNavigate } from "react-router-dom";
import Api from "../../config/Api";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState, useContext } from "react";

import { AuthContext } from "../../context/auth";

const validationPost = yup.object({
    nameUser: yup.string().required("Informe o nome de usuário"),
    password: yup.string().required("Infome sua senha")

  }).required();

export default function Login(){
  //  const navigate = useNavigate()
    
    const{register, handleSubmit, formState :{errors}} = useForm({
        resolver:yupResolver(validationPost)
    })

    const {authenticated, login} = useContext(AuthContext)


  

    const onSubmit =  (data) => {
        const nameUser = data.nameUser
        const password = data.password 
        
        console.log("onSubmit", {nameUser, password})

        login(nameUser, password)

    
        
    }
    return(
        <div className="containerLogin">
            <h1>Teste de Login</h1>
            <p>{String(authenticated)}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="userData">
                    <label htmlFor="nameUser">Nome de usuário</label>
                    <input  type="text" name="nameUser" id="nameUser" {...register("nameUser")}/>
                    <p>{errors.nameUser?.message}</p>
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
