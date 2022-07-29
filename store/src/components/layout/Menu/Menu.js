import { useState } from "react"
import "./Menu.css"

export default function Menu(){
    
    const [btnMenu, setBtnMenu] = useState(false)
    
    const ActiveMenu = ()=>{
        setBtnMenu(!btnMenu)
    }

    return(
        <div className={`containerMenu ${btnMenu !== true? " " : "teste"}`} >
            
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