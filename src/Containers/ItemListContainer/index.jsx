import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../Components/ItemList';
import { products } from '../../data/products';
import './styles.scss'

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([])
  const {categoryID} = useParams()
  useEffect(()=> {
    (async () =>{
    const obtenerProductos = new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve(products)
      },3000)
    })
      try{
        const response =  await obtenerProductos
        console.log(response);
        setProductos(response)
      }
      catch (error){
        console.log(error);
      }
    })()
  },[categoryID])
  console.log(productos);

  return (
    <div className='ilc'>
      <ItemList products={productos}/>
    </div>
  )
}

export default ItemListContainer