import React from 'react'
import ItemCount from '../ItemCount'
const ItemDetail = ({product}) => {
return (
    <div>
        <div className='card col-lg-6 col-xl-6 col-md-8 col-sm-8 goods'>
                    <img className='card-img-top' src= {product.img} alt= {product.name} />
                    <div className='card-body'>
                        <h4 className='card-title'>{product.name}</h4>
                        <p className='card-text'>{product.description}. Precio unitario: $<span class="pesos">{product.price}</span></p>
                        <strong>Stock: {product.stock}</strong>
                        <ItemCount stock={product.stock} initial={1} onAdd/>
                        <button className='btn btn-primary comprar nro'>Añadir al carro</button>
                    </div>
            </div>
    </div>
)
}

export default ItemDetail