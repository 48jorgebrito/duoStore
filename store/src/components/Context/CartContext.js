import { createContext, useState } from "react";



export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    


   const addProduct = (product)=>{
        
       
    if( !cart.find((item) => item.id === product._id) ){
    
        setCart([...cart, {
            id: product._id,
            name: product.name, 
            size: product.size,
            sex: product.sex,
            price: product.price,
            url: product.url
        }])
        
        }
        
        localStorage.setItem("cart", JSON.stringify(cart))
   }

   const removeProduct = (product) =>{

    const filterProduct = cart.filter((item) => item.id !== product)
    setCart(filterProduct)
    
    
    
    
}
const clearCart = () => {
    setCart([])
}
   
   
   
   
    return(
        <CartContext.Provider value={{addProduct, removeProduct, clearCart, cart}}>
            {children}
        </CartContext.Provider>
    )
}