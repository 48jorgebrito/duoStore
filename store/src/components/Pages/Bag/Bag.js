import './Bag.css'
import HeaderPages from "../../layout/HeaderPages/HeaderPages";
import {Link} from "react-router-dom"
import {BsEmojiFrown} from 'react-icons/bs'
export default function Bag(){
    return(
        <div className='Bag'>
                   <HeaderPages/>
            <div className='BagConatiner'> 
                <div className='EmptyBag'>
                    <BsEmojiFrown className='Emoji'/>
                    <h1>sua sacola está vazia!</h1>
                
                    <p>Mas você pode clicar no botão abaixo e encontar o produto que você procura em nossa loja. APROVEITE!</p>
                        
                    <div>

                    <Link to='/' className='BtnStore'>Voltar para a loja</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}