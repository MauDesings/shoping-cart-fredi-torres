import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { useCartContext } from '../../context/CartContext'
import './cartWidget.css'

const CartWidget = () => {
  const { state } = useCartContext();

  return (
    <div className='cartWidget'>
      <span className='cartWidget__total-items'>{state.totalItems}</span>
      <FaShoppingCart className='cartWidget__icon-cart'/> 
    </div>
  )
}

export default CartWidget;