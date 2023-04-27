import "./ProductPost.css"
import { useForm } from "react-hook-form"
import HeaderBack from "../../layout/HeaderBack/HeaderBack";
import { useNavigate } from 'react-router-dom';

import {api} from "../../config/apiAuth";
import ProductCategories from "../../config/ProductCategories.json"
import { useState } from "react";







export default function ProductPost(){


    let navigate = useNavigate()

    //PEGANDO OS VALORES DOS INPUT's COM O REACT-HOOK-FORM
    const{register, handleSubmit, formState:{errors}}= useForm()
    
    
  const onSubmit = async (data) =>{
     /*const formData = new FormData()

    formData.append('name', data.name)
    formData.append('size', data.size)
    formData.append('sex', data.sex)
    formData.append('price', data.price)
    formData.append('file' , data.file[0])
    
    await api.post('/products', formData).then(()=>{
       
        navigate('/')
    }).catch((error)=>{

        console.log(error)
    })*/

    console.log(data)
  }
    const [selectGrupo, setSelectGrupo] = useState('roupa')
    const [selectCateg, setSelectCateg] = useState('camisa')
    const [selecSubtCateg, setSelectSubCateg] = useState('regata')
   
    const {grupo, categorias, subcategorias} = ProductCategories
    
    const categoriaList = categorias[selectGrupo]
    const subcategoriaList = subcategorias[selectCateg]
    
    
    console.log(subcategoriaList)
   
   
    return(
            
        <div>
            <HeaderBack/>
        
           
           <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h1>{selectGrupo}</h1>
                <input type="file" name="file" {...register("file")} />
                
                <label  htmlFor="name" className="Tamanho">GRUPOS</label>
                <select name="grupo" value={selectGrupo} {...register("grupo")} onChange={(event)=> setSelectGrupo(event.target.value)}>
                    {
                    grupo.map((item)=>(
                    <option key={item}>
                        {item}
                    </option>
                    
                    ))}
                      
                </select>
                <label  htmlFor="name" className="Tamanho">CATEGORIAS</label>
                <select name="categorias" value={selectCateg} {...register("categorias")} onChange={(event)=> setSelectCateg(event.target.value)}>
                    {
                    categoriaList.map((item, index)=>(
                    <option key={index}>
                        {item}
                    </option>
                    
                    ))}
                      
                </select>
                {
                    
                }
                <select  name="subcategorias" value={selecSubtCateg} {...register("subcategorias")} onChange={(event)=> setSelectSubCateg(event.target.value)}>
                
                    {
                        
                    subcategoriaList.map((item)=>(
                        
                    <option  key={item}>
                        {item}
                    </option>
                    
                    ))}
                      
                </select>
               
                
                
                
                
                
                
                
                    <p></p>
                <button type="submit" name="add">Adicionar</button>
            </form> 
        </div>
        
    )
} 