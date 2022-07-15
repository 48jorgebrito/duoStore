import './SectionProducts.css'
import { useState, useEffect } from 'react';
import Api from '../../../config/Api';
import camisa from '../../images/flamengoBranca.jpg'
export default function SectionProducts(){
 
    const [data, setData] = useState([])
  
  useEffect( ()=>{
    const loadAll = async ()=>{
      let listData =  await Api.get('/products')
         
           setData(listData.data)
    }   
     
   loadAll()
        
    },[])

    return(
        <div className='sectionProducts'>
           <div className='productsContainer'>
               {
               data.map((item, index) =>(
                <div className='productsSingle' key={index}>
                   
                    <div className='image'>
                        <img src={item.url} alt='camisa'/>
                    </div>
                    
                    <div className='descriptionProducts'>
                       
                        <h4>{item.name}</h4>
                        
                        <div className='sizeSex'> 
                            <p>Tamanho: {item.size}</p>
                            <div className='line'></div>
                            <p> {item.sex}</p>
                        </div>

                        <h3>R$ {item.price}</h3>

                    </div>

                </div>

               ))
               }
               
               
                


            </div>     
        </div>
    )
}