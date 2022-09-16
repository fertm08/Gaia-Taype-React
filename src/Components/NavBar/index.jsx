import React from 'react'
import './styles.scss'
// import CartWidget from '../CartWidget'
import {Link} from 'react-router-dom'
// import {TbShovel} from 'react-icons/tb'
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
                        <li>
                            <Link to='/'><i className='fa-solid fa-house'></i></Link></li>
                        <li>
                            <Link to='/category/plant'><i className='fa-solid fa-leaf'></i></Link></li>
                        <li>
                            <Link to='/category/tool'><i className='fa-solid fa-toolbox'></i></Link></li>
                        <li>
                            <Link to=''> <i className='fa-solid fa-cart-shopping'></i></Link></li>
                    </ul> 
                    <input type="text" placeholder="Buscar"/>
                    </nav>
                </section>
                {/* <div><CartWidget/></div> */}
    </header>
    
)
}

export default NavBar;