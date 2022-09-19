import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shop } from '../../Context/CartContext'
import ItemCount from '../ItemCount'
const ItemDetail = ({products}) => {
    const [qty,setQty] = useState(0)
    const navigate= useNavigate()

    const {addItem} = useContext(Shop)
    const addCart = ((quantity) =>{
        setQty(quantity)
    })
    const handleFinish = () => {
        const productOnlist = {...products,quantity: qty}
        addItem (productOnlist)
        navigate('/cart')
    }
return (
    <div>
        <div className='card col-lg-6 col-xl-6 col-md-8 col-sm-8 goods'>
                    <img className='card-img-top' src= {products.img} alt= {products.name} />
                    <div className='card-body'>
                        <h4 className='card-title'>{products.name}</h4>
                        <p className='card-text'>{products.description}. Precio unitario: $<span class="pesos">{products.price}</span></p>
                        <strong>Stock: {products.stock}</strong>
                        { !qty ? (<ItemCount stock={products.stock} initial={1} onAdd={addCart}/>)
                        : (<button className='btn btn-primary comprar nro' onClick={handleFinish}>Finalizar compra</button>)}
                    </div>
            </div>
    </div>
)
}

export default ItemDetail