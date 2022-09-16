import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../Components/ItemDetail'
import { products } from '../../data/products'

const ItemDetailContainer = () => {
    const [productDetail,setProductDetail]= useState([])
    const {productId} = useParams()
    ;
    useEffect(()=> {
        (async () =>{
        const obtenerProducto = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(products)
        },2000)
        })
        try{
            const response =  await (obtenerProducto);
            setProductDetail(response)
        }
        catch (error){
            console.log(error);
        }
        })()
    },[productId])
return (
    <ItemDetail products={productDetail}/>
)
}

export default ItemDetailContainer