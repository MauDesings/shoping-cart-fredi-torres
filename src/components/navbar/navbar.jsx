import { useState } from 'react'
import {RiCloseFill, RiMenuFill} from 'react-icons/ri'
import bgPattern from '../../assets/bgPattern.svg'
import NavLinks from './NavLinks'
import CartWidget from '../cartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png';
import './navBar.css'
import { useProductContext } from '../../context/ProductContext'


const Navbar = () => {
  const{openMenu,handleOpen} = useProductContext();

  return (
    <nav className='container nav'>
        <RiMenuFill className='icon' onClick={handleOpen} />
        <img src={logo} className='logo-img' alt="imagge-logo" />

        <div className={ openMenu ? 'menu-modal opacity' : 'menu-modal' }>
            <ul className={ openMenu ? 'menu-links open' : 'menu-links' }>
                <span className='menu-logo'>MAU STORE</span>
                <NavLinks />
                <RiCloseFill className='icon icon-close' onClick={handleOpen} />
                <img className='bg' src={bgPattern} alt="image-circle" />
            </ul>
        </div>
        
        <NavLink className='link link-cart' to='/cart'>   
            <CartWidget />
        </NavLink>
    </nav>
  )
}

export default Navbar;