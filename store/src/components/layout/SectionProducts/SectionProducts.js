import './SectionProducts.css'
import { useState, useEffect } from 'react';
import {Api} from '../../../config/Api';

import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

export default function SectionProducts(){
 
    const [data, setData] = useState([])
  
  useEffect( ()=>{
   
    ( async ()=>{
      let listData =  await Api.get('/products')
         
           setData(listData.data)
    })() 
     
   }, [])

    const{addProduct} = useContext(CartContext)

    return(
        <div className='sectionProducts'>
           <div className='productsContainer'>
               {
               data.map((product) =>(
                <div className='productsSingle' key={product._id} >
                   
                    <div className='image'>
                        <img src={product.url} alt='camisa'/>
                    </div>
                    
                    <div className='descriptionProducts'>
                       
                        <h4>{product.name}</h4>
                        
                        <div className='sizeSex'> 
                            <p>Tamanho: {product.size}</p>
                            <div className='line'></div>
                            <p> {product.sex}</p>
                        </div>

                        <h3>{`R$ ${product.price}`}</h3>

                    </div>
                    <button onClick={() => addProduct(product) } className="BtnAddProduct">ADICIONAR A SACOLA</button>
                </div>

               ))
               }
               
               
                


            </div>     
        </div>
    )
}