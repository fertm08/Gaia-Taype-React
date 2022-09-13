import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../Components/ItemDetail'
import { products } from '../../data/products'

const ItemDetailContainer = () => {
    const [productDetail,setProductDetail]= useState([])
    useEffect(()=> {
        (async () =>{
        const obtenerProducto = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(products)
        },2000)
        })
        try{
            const response =  await obtenerProducto
            console.log(response);
            const singleProduct = response[3]
            setProductDetail(singleProduct)
        }
        catch (error){
            console.log(error);
        }
        })()
    },[])
return (
    <ItemDetail products={productDetail}/>
)
}

export default ItemDetailContainer