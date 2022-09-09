import React from 'react'
import { products } from '../../data/products'
import Item from '../Item'

const ItemList = () => {
  return (
    <div>
        {products.map(product => {
            return <Item key={product.id}product={product}/>
        })}
    </div>
  )
}

export default ItemList