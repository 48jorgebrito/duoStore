import "./Menu.css"
import {  useContext } from "react"
import { MenuContext } from "../../Context/MenuContext"

export default function Menu(){
    
    const {btnMenu, ActiveMenu} = useContext(MenuContext)

    return(
        <div className={`containerMenu ${btnMenu !== true?  " " : "ActiveMenu "}`} >
            
            <div className="bodyMenu">
                <div className="headerMenu"> 
                    <h3>Minha conta</h3>
                    <h2 onClick={ActiveMenu}>X</h2>
                </div> 
                <nav className="nav">
                    <ul>
                        <li>Camisas</li>
                        <li>Bermudas</li>
                        <li>Cuecas</li>
                        <li>Bonés</li>
                        <li>Carteiras</li>
                        <li>Cintos</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}