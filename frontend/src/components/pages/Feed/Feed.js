import './Feed.css'
import apiReq from "../../apiReq";

import { useEffect, useState } from "react";
import Header from '../../layout/Header/Header'
import { Link } from "react-router-dom";

import {api} from "../../config/apiAuth"



export default function Feed(){
    
    const[products, setProducts] = useState([])

    useEffect(()=>{
        const loadAll = async()=>{
           let listProduct =  await apiReq.getproductList()
           setProducts(listProduct.list)
            
        }
        
        loadAll()
    },[])
    
    function deleteProduct(id){
        api.delete(`/products/${id}`)

        setProducts(products.filter(products => products._id !== id))
    }
    return(
        <div className="container">
            <Header/>
                {
                    products.map((item, index)=>(
                        <div className="boxProduct" key={index}>
                           
                            <div className='boxImage'>
                                <img src={item.url}/>
                            </div>

                            <div className='description'>
                                <h1>{item.name}</h1>
                                <p>{item.sex}</p>
                                <p>Tamanho - {item.size}</p>
                                <p>R$ {item.price}</p>
                            </div>
                            
                           
                            <div className="box-btn">
                                <Link to= {{pathname: `edit/${item._id}`}} className='btnLink'>
                                    <button>Editar</button>
                                </Link>
                                    <button onClick={()=> deleteProduct(item._id)}>Deletar</button>
                            </div>
                        </div>
                    ))
                }
           

        </div>
    )
}