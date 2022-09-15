import React from 'react'
import ItemCount from '../ItemCount'
const ItemDetail = ({products}) => {
return (
    <div>
        <div className='card col-lg-6 col-xl-6 col-md-8 col-sm-8 goods'>
                    <img className='card-img-top' src= {products.img} alt= {products.name} />
                    <div className='card-body'>
                        <h4 className='card-title'>{products.name}</h4>
                        <p className='card-text'>{products.description}. Precio unitario: $<span class="pesos">{products.price}</span></p>
                        <strong>Stock: {products.stock}</strong>
                        <ItemCount stock={products.stock} initial={1} onAdd/>
                        <button className='btn btn-primary comprar nro'>Añadir al carro</button>
                    </div>
            </div>
    </div>
)
}

export default ItemDetail