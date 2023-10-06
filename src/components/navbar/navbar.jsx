import { useState } from 'react'
import {RiCloseFill, RiMenuFill} from 'react-icons/ri'
import bgPattern from '../../assets/bgPattern.svg'
import NavLinks from './NavLinks'
import CartWidget from '../cartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import './navBar.css'


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='container nav'>
        <RiMenuFill className='icon'onClick={()=> setOpenMenu(!openMenu)} />

        <div className={ openMenu ? 'menu-modal opacity' : 'menu-modal' }>
            <ul className={ openMenu ? 'menu-links open' : 'menu-links' }
                onClick={()=> setOpenMenu(!openMenu)}>
                <NavLinks />
                <RiCloseFill className='icon icon-close' />
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