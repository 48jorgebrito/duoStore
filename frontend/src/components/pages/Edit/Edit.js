import './Edit.css'
import { useForm } from "react-hook-form"
import HeaderBack from "../../layout/HeaderBack/HeaderBack";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// IMPORTANDO O AXIOS 
import {api} from "../../config/apiAuth"

// IMPORTANDO O YUP RESOLVER PARA VALIDAR O FORMULARIO
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validationPost = yup.object({
    name: yup.string().required("Informe o nome do produto"),
    size: yup.string().required("Informe o tamanho do produto (P, M, G ou GG)").max(2, 'maximo de 2 caracteres'),
    sex: yup.string().required("Iforme se é maculino ou feminino"),
    price: yup.number().required("Infome o preço do produto")

  }).required();



export default function Edit(){


    let navigate = useNavigate()
   
    //PEGANDO OS VALORES DOS INPUT's COM O REACT-HOOK-FORM
    const{register, handleSubmit, formState:{errors}, reset } = useForm({
        resolver:yupResolver(validationPost)
    })
    
    //ATUALIZANDO PRODUTOS COM O AXIOS
    const addPost = data => api.patch(`/products/${id}`, data).then(()=>{
        console.log("produto atualizado com sucesso")
        navigate('/')
    }).catch((error)=>{
        console.log(error)
    })
    

    //PASSANDO AS INFORMAÇÕES DO PRODUTO PARA O INPUT COM O AXIOS E RESET (REACT-ROUTER-DOM)
    const { id } = useParams()
    useEffect(()=>{
        api.get(`/products/${id}`).then((response)=>{
        reset(response.data)
    })

    }, [])
    
    return(
            
        <div>
            <HeaderBack/>
           <form className="form" onSubmit={handleSubmit(addPost)}>
            <h1>Editar produto</h1>
            
            <label  htmlFor="name">Nome</label>
            <input type="text" id="name" name ="name" {...register("name")}/>
            <p className="error-message">{errors.name?.message}</p>

            <label htmlFor="size">Tamanho</label>
            <input type="text" id="size" name ="size" {...register("size")}/>
            <p className="error-message">{errors.size?.message}</p>

            <label htmlFor="sex">Sexo</label>
            <input type="text" id="sex" name ="sex" {...register("sex")}/>
            <p className="error-message">{errors.sex?.message}</p>

            <label htmlFor="price">Preço</label>
            <input  id="price" name ="price" {...register("price")}/>
            <p className="error-message">{errors.price?.message}</p>

            <button type="submit" name="add">Adicionar</button>
        </form> 
        </div>
        
    )
}