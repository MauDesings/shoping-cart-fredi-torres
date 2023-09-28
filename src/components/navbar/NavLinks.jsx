import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <>
        <li><NavLink className='link' to='/'>Home</NavLink></li>
        <li><NavLink className='link' to='/categories'>Categories</NavLink></li>
        <li><NavLink className='link' to='/product'>Product</NavLink></li>
        <li><NavLink className='link' to='contact'>Contact</NavLink></li>
    </>
  )
}

export default NavLinks;