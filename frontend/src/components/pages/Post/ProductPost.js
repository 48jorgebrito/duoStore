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
    const{register, handleSubmit}= useForm()
    
    
  const onSubmit = async (data) =>{
    
    const formData = new FormData()
    formData.append('grupo', data.grupo)
    formData.append('categoria', data.categoria)
    formData.append('subCategoria', data.subCategoria)
    formData.append('name', data.name)
    formData.append('sex', data.sex)
    formData.append('size', data.size)
    formData.append('qntd', data.qntd)
    formData.append('precoCusto', data.precoCusto)
    formData.append('margemLucro', data.margemLucro)
    formData.append('file' , data.file[0])
    
    await api.post('/products', formData).then(()=>{
       
        navigate('/')
    }).catch((error)=>{

        console.log(error)
    })

  }
    const [selectGrupo, setSelectGrupo] = useState('roupa')
    const [selectCateg, setSelectCateg] = useState('camisa')

    const {grupos, categorias, subcategorias} = ProductCategories

    const categoriaList = categorias[selectGrupo]
    const subcategoriaList = subcategorias[selectCateg]
    
    return(
            
        <div>
            <HeaderBack/>
           <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Adicione um produto</h1>
                <input required type="file" name="file" {...register("file")} />
            
                <label className="Tamanho">GRUPOS</label>
                <select required name="grupo" defaultValue={'DEFAULT'} {...register("grupo")} onChange={(event)=> setSelectGrupo(event.target.value)}>
                  <option value="DEFAULT" disabled>Selecione um grupo ...</option>
                    {
                    grupos.map((item)=>(
                    <option key={item}>
                        {item}
                    </option>
                    
                    ))}   
                </select>

                <label className="Tamanho">CATEGORIAS</label>
                <select required name="categoria" defaultValue={'DEFAULT'} {...register("categoria")} onChange={(event)=> setSelectCateg(event.target.value)}>
                   <option value="DEFAULT" disabled>Selecione uma categoria ...</option>
                    {
                    categoriaList.map((item, index)=>(
                    <option key={index}>
                        {item}
                    </option>
                    
                    ))}
                </select>

                <label className="Tamanho">SUBCATEGORIAS</label>
                <select required name="subCategoria" defaultValue={'DEFAULT'} {...register("subCategoria")}>
                    <option value="DEFAULT" disabled>Selecione uma subcategoria ...</option>
                    {
                        
                    subcategoriaList.map((item)=>(
                        
                    <option  key={item}>
                        {item}
                    </option>
                    
                    ))}  
                </select>

                <label  htmlFor="name">Nome</label>
                <input required type="text" id="name" name ="name" {...register("name")}/>

                <label>SEXO</label>
                <select required name="sex" defaultValue={'DEFAULT'}  {...register('sex')}>
                    <option value="DEFAULT" disabled>Selecione o sexo ...</option>
                    <option>MASCULINO</option>
                    <option>FEMININO</option>
                    <option>UNISEX</option>
                </select>

                <label>TAMANHO</label>
                <select required name="size" defaultValue={'DEFAULT'}  {...register('size')}>
                    <option value="DEFAULT" disabled>Selecione o tamanho ...</option>
                    <option>PADRAO</option>
                    <option>P</option>
                    <option>M</option>
                    <option>G</option>
                    <option>GG</option>
                </select>
            
                <label>QUANTIDADE</label>
                <input required type="number" name ="qntd" defaultValue={1} {...register("qntd")}/>
                
                <label>PRECO DE CUSTO</label>
                <input required type="text" name ="precoCusto"  {...register("precoCusto")}/>

                <label>MARGEM DE LUCRO</label>
                <input required type="text" name ="margemLucro" defaultValue={70} {...register("margemLucro")}/>

            <button type="submit" name="add">Adicionar</button>
        </form> 
        </div>
        
    )
}