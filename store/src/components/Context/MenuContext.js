import { createContext, useState } from "react";

export const MenuContext = createContext()

export const MenuProvider = ({children}) =>{
    const [btnMenu, setBtnMenu] = useState(false)
    
    const ActiveMenu = ()=>{
        setBtnMenu(!btnMenu)
    }
    return(
        <MenuContext.Provider value={{btnMenu, ActiveMenu}}>
            {children}
        </MenuContext.Provider>
    )
}