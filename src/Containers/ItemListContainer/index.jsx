import React from 'react'
import ItemCount from '../../Components/ItemCount'
import './styles.scss'

const ItemListContainer = ({greeting}) => {
  const agregarAlCarrito = (cantidad) =>{
    console.log(`Se añadio ${cantidad} al carrito `);
  }
  return (
    <div className='ilc'>
      <h2>{greeting}</h2>
      <ItemCount initial={1} stock ={6} onAdd={agregarAlCarrito}/>
    </div>
  )
}

export default ItemListContainer