import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState()
   


   const addProduct = (product)=>{
        
        const list = [product]
         
        setCart(list)
        console.log(cart)
   }
   const removeProduct = (id)=>{
    
}
   
   
   
   
    return(
        <CartContext.Provider value={{addProduct, removeProduct}}>
            {children}
        </CartContext.Provider>
    )
}