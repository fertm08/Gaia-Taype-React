import React from 'react'
import { useState } from 'react';
import { createContext } from "react";

export const Shop = createContext()

const ShopProvider = ({children}) => {
        const [cart,setCart] = useState([])
        const addItem = (item) => {
        const flag = onCart(item.id)
        if (flag) {
            const cartModificado = cart.map(product =>{
                if (product.id=== item.id){
                    product.quantity+= item.quantity
                    return product
                }
                return product
            })
            setCart(cartModificado)
        }
        else{
            const cartMod = [...cart, item]
            setCart(cartMod)
        }
        }
        const onCart = (id) =>{
            return cart.some(product =>product.id===id)
        }
        //Lo estructuro pensando en un boton onClick, imaginandome como se implementaria en el componente, revise algo que hice en js no se si funcionaria aqui
        const removeItem = (itemToRemove) =>{
            const filteredProducts = cart.filter(item => item !== itemToRemove);
        setCart(filteredProducts)
            }
        const clearCart = () => {
        setCart([])
        }
        const total = () => {
            const total = cart.reduce((acc, producto) => acc += producto.quantity * producto.price, 0)
            return total;}
    return (
    <Shop.Provider value={{cart,addItem,removeItem,clearCart,total}}>
        {children}
    </Shop.Provider>
    )
}

export default ShopProvider