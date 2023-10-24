import React from 'react'
import ItemCart from '../../components/itemCart/ItemCart'
import { useCartContext } from '../../context/CartContext'
import { NavLink } from 'react-router-dom'
import {AiOutlineRollback } from 'react-icons/ai'
import './appCart.css'

const AppCart = () => {
    const { state, clearCart } = useCartContext();
    const totalItemsCart = state.totalItems > 1 ? `${state.totalItems} items` : `${state.totalItems} item`;

    return (
        <div className='cart'>
            {state.cart.length ? (
                <>
                    <ul className='cart__content'>
                        <li className='cart__nav-head-flex'>
                            <h3>CART <span>( {totalItemsCart} )</span></h3>
                        </li>

                        <li className='cart__nav-body'>
                            {
                                state.cart.map((item,index)=>(
                                    <ItemCart key={index} {...item} />
                                )) 
                            }
                        </li>

                        <li className='cart__nav-footer-flex'>
                                <NavLink to='/product' className='back-link'>
                                    <button className='cart__nav-btn-back'> <AiOutlineRollback /> Atrás</button>
                                </NavLink>
                                <button type="button" className="cart__nav-btn-clear" onClick={clearCart}> 
                                Vaciar carrito
                                </button>
                        </li>
                    </ul>

                    <div className='cart__sumary-content'>
                        <h3>Resumen del pedido</h3>
                        <div className='cart__sumary-info'>
                            <h4> Productos <span>( {state.totalItems} )</span></h4>
                            <p className='cart__nav-total'>TOTAL:<span className="span-total">$ {state.totalPrice}</span></p>  
                            <NavLink to='/checkout'>
                            <button type='button' className='cart__nav-btn-checkout' >Go to Checkout </button>
                            </NavLink> 
                        </div>
                    </div>
                    
                </> ) : (
                    <div className='cart__content-empty'>
                        <h5 className='cart__nav-empty-cart'>Tu carrito esta vacío</h5>
                        <NavLink to='/product' className='back-link'>
                            <button className='cart__nav-btn-back'> <AiOutlineRollback /> Ir a productos </button>
                        </NavLink> 
                    </div> )
            }
        </div>
    )
}

export default AppCart
