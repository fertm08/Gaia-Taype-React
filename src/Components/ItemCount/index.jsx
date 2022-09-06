import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ItemCount = ({stock,initial,onAdd}) =>{
    const [count,setCount] = useState(initial)
    const handleAdd =() => {
        if (count < stock)
        setCount(count+1)
        else alert ("No hay suficiente stock disponible")};
    const handleLess= () =>{
        if (count > initial)
        setCount( count-1)
        else alert ("El minimo de productos es una unidad")
    }
    useEffect(() =>{
        console.log("Inicializo el ItemCount");
    },[])
    useEffect(() => {
        console.log("ItemCount updated");
    },[count])
    return (
    <div>
        <h2>{count}</h2>
        <button onClick={handleAdd}>+</button><button onClick={handleLess}>-</button>
        <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
    </div>
    );
}

export default ItemCount