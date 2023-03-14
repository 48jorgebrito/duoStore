import { useEffect } from "react";
import { createContext, useState } from "react";
import { AuthContext } from "./Auth";
import { useContext } from "react";



export const CartContext = createContext()

export const CartProvider = ({children}) =>{
   
    const{setCart, cart} = useContext(AuthContext)
   
    
    const getCart = localStorage.getItem("cart")
    const getLocal = JSON.parse(getCart)
    let add = []
    if(getCart){
        add = [...getLocal]
    }
    const cartList = [...add]
    
    useEffect(()=>{
        setCart(cartList)
        
    }, [])

    const addProduct = (product) =>{
        if(!cartList.find((item) => item.id === product._id)){

            const dataProduct = {
                id: product._id,
                name: product.name, 
                size: product.size,
                sex: product.sex,
                price: product.price,
                url: product.url
            }
            cartList.push(dataProduct)
        }
        localStorage.setItem("cart", JSON.stringify(cartList))
        setCart(cartList)
    }
   
    


   const removeProduct = (product) =>{
    const filterGetLocal = getLocal.filter((item)=> item.id !== product)
    localStorage.setItem("cart", JSON.stringify(filterGetLocal))
    setCart(filterGetLocal)
    
    
}
const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart")
}
   
   
   
   
    return(
        <CartContext.Provider value={{addProduct, removeProduct, clearCart, cart}}>
            {children}
        </CartContext.Provider>
    )
}