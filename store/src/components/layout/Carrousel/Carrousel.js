import './Carrousel.css'
import banerPromo from '../../images/banerPromo4.webp'
import banerPromo2 from '../../images/banerPromo2.webp'
import banerPromo3 from '../../images/banerPromo3.webp'

import {HiChevronLeft} from 'react-icons/hi'
import {HiChevronRight} from 'react-icons/hi'

import { useRef, useEffect, useState } from 'react'



export default function Carrousel(){
    
    const carrousel = useRef()
    
    const [stopCarrousel, SetStopCarrousel] = useState(0)
    useEffect(()=>{
       
        setTimeout(()=>{
            
                if(carrousel.current.scrollLeft >=  (2 * carrousel.current.offsetWidth)){
                    carrousel.current.scrollLeft = 0
                }else{
                    carrousel.current.scrollLeft += carrousel.current.offsetWidth
                }
           
       }, 5000)
       
    },[setInterval(()=>{SetStopCarrousel(stopCarrousel + 1) },5000)])
      

        const leftClick = (e) => {
        e.preventDefault()
        
        carrousel.current.scrollLeft -= carrousel.current.offsetWidth
       
    }
   
    const rightClick = (e) => {
        e.preventDefault()
       
        if(carrousel.current.scrollLeft >=  (2 * carrousel.current.offsetWidth)){
            carrousel.current.scrollLeft = 0
        }else{
            carrousel.current.scrollLeft += carrousel.current.offsetWidth
        }
        
       
    }
   
    
    return(
        <div className='Carrousel' >
          <div className='container 'ref={carrousel} >
                <div className='boxImage'>
                    <img src={banerPromo3} alt='image2'/>
                </div>

                <div className='boxImage'>
                    <img src={banerPromo2} alt='image2'/>
                </div>

                <div className='boxImage'>
                    <img src={banerPromo} alt='image3'/>
                </div>


                <button className='btnLeft' onClick={leftClick}><HiChevronLeft/></button>
                <button className='btnRight' onClick={rightClick}><HiChevronRight/></button>
    </div>
            
            
        </div>
    )
}