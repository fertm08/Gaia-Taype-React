import React from 'react'
import { useState } from 'react';
import { createContext } from "react";

export const Shop = createContext()

    const ShopProvider = ({children}) => {
        const [cart,setCart] = useState([])
        const addItem = (item) => {
            const cartMod = [...cart, item]
            setCart(cartMod)
        }
    return (
    <Shop.Provider value={{cart,addItem}}>
        {children}
    </Shop.Provider>
    )
}

export default ShopProvider