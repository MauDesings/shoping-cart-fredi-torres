import React from 'react'
import { NavLink } from 'react-router-dom'
import { useProductContext } from '../../context/ProductContext'

const NavLinks = () => {
  const{handleOpen}= useProductContext();
  return (
    <>
        <li><NavLink onClick={handleOpen} className='link' to='/'>Inicio</NavLink></li>
        <li><NavLink onClick={handleOpen} className='link' to='/product'>Productos</NavLink></li>
        <li><NavLink onClick={handleOpen} className='link' to='/categories'>Categorias</NavLink></li>
    </>
  )
}

export default NavLinks;