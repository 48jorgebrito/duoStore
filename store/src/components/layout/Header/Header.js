import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineSearch } from "react-icons/ai"
import { RiUser3Fill} from "react-icons/ri"
import {BsFillBagCheckFill} from 'react-icons/bs'
import Logo from "../../images/DuoLogo.png"

export default function Headers(){
    return(
        <div className='header'>
            <div className='container'>
                
                <div className='boxMenu'>
                    <button name='btnMenu'><GiHamburgerMenu/></button>
                    <label htmlFor='btnMenu'>Menu</label>
                </div> 
               
                <div className='logo'>
                    <img src={Logo}/>
                    
                </div>
               
                <div className='search'>
                    <input type='text' name='search' placeholder='Pesquise suas rupas'/>
                    <button><AiOutlineSearch/></button>
                </div>
               
                <div className='account'>
                    <button  name='btnUser'><RiUser3Fill/></button>
                    <label htmlFor='btnUser'>MINHA CONTA</label>
                </div>
                
                <div className='bag'>
                    <button><BsFillBagCheckFill/></button>
                </div>

            </div>

        </div>
    )
}