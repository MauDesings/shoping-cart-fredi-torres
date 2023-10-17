import React from 'react'
import ItemCart from '../../components/itemCart/ItemCart'
import { useCartContext } from '../../context/CartContext'
import './appCart.css'
import { NavLink } from 'react-router-dom'

const AppCart = () => {
    const { state, clearCart } = useCartContext();
    const totalItemsCart = state.totalItems > 1 ? `${state.totalItems} items` : `${state.totalItems} item`;


    return (
        <ul className='cart__content'>
            <li className='cart__nav-head-flex'>
                <h3>CART <span>( {totalItemsCart} )</span></h3>
            </li>

            <li className='cart__nav-body'>
                {state.cart.length ?
                    state.cart.map((item,index)=>(
                        <ItemCart key={index} {...item} />
                            
                    )) : <div className='cart__nav-empty-content'>
                            <h5 className='cart__nav-empty-cart'>Empty Cart</h5> 
                         </div>
                }
            </li>

            <li className='cart__nav-footer-flex'>
                <button 
                    type="button" 
                    className="cart__nav-btn-clear"
                    onClick={clearCart}> 
                    Clear Cart
                </button>

                <NavLink to='/checkout'>
                <button type='button' className='cart__nav-btn-checkout' >Go to Checkout </button>
                </NavLink>    
            
                <p className='cart__nav-total'>TOTAL:<span className="span-total">$ {state.totalPrice}</span></p>  
            </li>
        </ul>
  )
}

export default AppCart