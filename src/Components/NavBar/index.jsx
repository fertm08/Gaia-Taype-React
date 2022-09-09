import React from 'react'
import './styles.scss'
import CartWidget from '../CartWidget'
const NavBar = () => {
    return (
    <header className='head'>
            <div>
                <section className='mainlogo'>Gaia
                </section>
            </div>
                <section className='mobilenav'>
                    <nav className='mobvar'>
                    <ul>
                        <li><a href="index.html"><i className='fa-solid fa-house'></i></a></li>
                        <li><a href="contacto.html"><i className='fa-solid fa-address-card'></i></a></li>
                        <li><a href="productos.html"><i className='fa-solid fa-basket-shopping'></i></a></li>
                        <li><a href="tienda.html"> <i className='fa-solid fa-cart-shopping'></i></a></li>
                    </ul> 
                    <input type="text" placeholder="Buscar"/>
                    </nav>
                </section>
                <div><CartWidget/></div>
    </header>
    
)
}

export default NavBar;