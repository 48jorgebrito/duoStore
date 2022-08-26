import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineSearch } from "react-icons/ai"
import { RiUser3Fill} from "react-icons/ri"
import {BsFillBagCheckFill} from 'react-icons/bs'
import Logo from "../../images/DuoLogo.png"

import {  useContext, useEffect, useState } from "react"
import { MenuContext } from "../../Context/MenuContext"
import { AuthContext } from '../../Context/Auth'

import {Link} from 'react-router-dom'
import { Api } from '../../../config/Api'

export default function Headers(){

    const {ActiveMenu} = useContext(MenuContext)
    const {authenticated, dataUser} = useContext(AuthContext)
    
    return(
        <div className='header'>
            <div className='container'>
                
                <div className='boxMenu' onClick={ActiveMenu}>
                    <button name='btnMenu'><GiHamburgerMenu/></button>
                    <label htmlFor='btnMenu'>Menu</label>
                </div> 
               
                <div className='logo'>
                    <img src={Logo} alt='logo'/>
                    
                </div>
               
                <div className='search'>
                    <input type='text' name='search' placeholder='Pesquise suas rupas'/>
                    <button><AiOutlineSearch/></button>
                </div>
               
                
                <Link className='account' to={authenticated ? "/conta" : "/login"}>
                    <button  name='btnUser'><RiUser3Fill/></button>
                    <label htmlFor='btnUser'>{authenticated ? dataUser.firstName : "minha conta" }</label>
                </Link>
                
                
                <Link className='bag' to='/bag'>
                    <button><BsFillBagCheckFill/></button>
                </Link>

            </div>

        </div>
    )
}