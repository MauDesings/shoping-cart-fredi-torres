import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import './cartWidget.css'

const CartWidget = () => {
  return (
    <div className='cartWidget'>
      <span className='cartWidget__total-items'>0</span>
      <FaShoppingCart className='cartWidget__icon-cart'/> 
    </div>
  )
}

export default CartWidget;