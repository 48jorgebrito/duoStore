import './SectionProducts.css'
import { useState, useEffect } from 'react';
import {Api} from '../../../config/Api';

import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

export default function SectionProducts(){
 
    const [products, setProducts] = useState([])

  useEffect( ()=>{
   
    ( async ()=>{
      let listData =  await Api.get('/products')
         
        setProducts(listData.data)
    })() 
    
   }, [])

    const{addProduct, search} = useContext(CartContext)
    
    const searchFilter = products.filter((product) => product.name === search)
    const ProductList = (ele) =>{
        if(ele.length !== 0 && search){
            return(searchFilter)
           
        }else if(ele.length === 0){
            return(products)
        }
    }
    
    return(
        <div className='sectionProducts'>
           <div className='productsContainer'>
               {searchFilter.length === 0 && search?
               <div> 
                   {`Não há nenhum produto com o nome ${search} em nossa loja `}
               </div>
               :
               ProductList(searchFilter).map((product) =>(
                <div className='productsSingle' key={product._id}>
                   
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