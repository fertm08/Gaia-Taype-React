import React from 'react'
import './styles.scss'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='ilc'>
      <h2>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer