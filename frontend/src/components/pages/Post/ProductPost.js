import "./ProductPost.css"
import { useForm } from "react-hook-form"
import HeaderBack from "../../layout/HeaderBack/HeaderBack";
import { useNavigate } from 'react-router-dom';

import {api} from "../../config/apiAuth";



// IMPORTANDO O YUP RESOLVER PARA VALIDAR O FORMULARIO
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validationPost = yup.object({
    name: yup.string().required("Informe o nome do produto"),
    size: yup.string().required(),
    sex: yup.string().required(),
    price: yup.string().required("Infome o preço do produto"),

    

  }).required();

export default function ProductPost(){


    let navigate = useNavigate()

    //PEGANDO OS VALORES DOS INPUT's COM O REACT-HOOK-FORM
    const{register, handleSubmit, formState:{errors}}= useForm({
        resolver:yupResolver(validationPost)
    })
    
    
  const onSubmit = async (data) =>{
    
    const formData = new FormData()
    
    
    formData.append('name', data.name)
    formData.append('size', data.size)
    formData.append('sex', data.sex)
    formData.append('price', data.price)
    formData.append('file' , data.file[0])
    
    await api.post('/products', formData).then(()=>{
       
        navigate('/')
    }).catch((error)=>{

        console.log(error)
    })

  }
  
    
    return(
            
        <div>
            <HeaderBack/>
           <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Adicione um produto</h1>
            <input required type="file" name="file" {...register("file")} />
            

            <label  htmlFor="name">Nome</label>
            <input type="text" id="name" name ="name" {...register("name")}/>
            <p className="error-message">{errors.name?.message}</p>

            <label  htmlFor="name">Tamanho</label>
            
            <select name="size" placeholder="Tamanho" {...register('size')}>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
                <option value="GG">GG</option>
            </select>
            

            <label htmlFor="sex">Sexo</label>
            <select name="sex" placeholder="Sexo" {...register('sex')}>
                <option value="Masculino">Maculino</option>
                <option value="Feminino">Feminino</option>
                
            </select>
            

            <label htmlFor="price">Preço</label>
            <input type="number" id="price" name ="price" {...register("price")}/>
            <p className="error-message">{errors.price?.message}</p>

            <button type="submit" name="add">Adicionar</button>
        </form> 
        </div>
        
    )
}