import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useCartContext } from '../../context/CartContext'
import './itemCart.css'

const ItemCart = (item) => {
    const {image,title,price,quantity,id} = item;
    const {handleDeleted, handleIncrement, handleDecrement} = useCartContext();
    const resulSubTotal = price * quantity;

    return (
        <div className='item-list'>
            <img src={image} alt="imagge" className="item-list__img" />

            <div className='item-list__info'>
                <div className="item-list__details">
                    <h3 className="item-list__name">{title}</h3>
                    <p className="item-list__price">$ {price}</p>
                </div>

                <div>
                    <p className="item-list__subtotal">Subtotal:<span> $ {Number(resulSubTotal.toFixed(2))}</span></p>
                    <div className="item-list__group">
                        <div className="item-list__buttons">
                            <button className="item-list__minus" onClick={()=> handleDecrement(id)}>-</button>
                            <input 
                                className="item-list__inp"
                                type="text" 
                                name='quantity'
                                value={quantity} 
                                onChange={(e)=> e.target.value} />
                            <button className="item-list__plus" onClick={()=> handleIncrement(id)}>+</button>
                        </div>
                    
                        <RiDeleteBin6Line className='items-list__deleted-icon' onClick={()=> handleDeleted(id)} />
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default ItemCart
