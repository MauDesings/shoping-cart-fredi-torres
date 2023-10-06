import React, { createContext, useContext, useReducer } from 'react'
import { useProductContext } from './ProductContext';
import { cartReducer } from '../reducer/cartReducer';

const initialState = {
    cart : [],
    totalItems: 0,
    totalPrice: 0
}

const CartContext = createContext();

const CartProvider = ({children}) => {
    const {data} = useProductContext();
    const [state,dispach] = useReducer(cartReducer,initialState);

    function handleAdd(id) {
        dispach({
            type: 'ADD_TO_CART',
            payload: {data, id}
        })
        handleItemsTotal();
        handlePricetotal();
    }
    

    function handleDeleted(id) {
        dispach({
            type: 'REMOVE_ONE_FROM_CART',
            payload: id
        })
        handleItemsTotal();
        handlePricetotal();
    }


    function handleIncrement(id) {
       dispach({
        type: 'INCREMENT_ONE_ITEM_FROM_CART',
        payload: id
       })
       handleItemsTotal();
       handlePricetotal();
    }
  

    function handleDecrement(id) {
        dispach({
         type: 'DECREMENT_ONE_ITEM_FROM_CART',
         payload: id
        })
        handleItemsTotal();
        handlePricetotal();
     }

     function handleItemsTotal() {
        dispach({
            type: 'TOTAL_ITEMS_CART'
        })  
    }

    function handlePricetotal() {
        dispach({
            type: 'TOTAL_PRICE_OF_PRODUCTS'
        })
    }

    function clearCart() {
        dispach({
            type: 'CLEAR_CART'
        })
    }


  return (
    <CartContext.Provider value={{state, handleAdd, handleDeleted, handleIncrement, handleDecrement, clearCart}}>
        {children}
    </CartContext.Provider>
  )
}

// custon hook
const useCartContext = () => useContext(CartContext);
export {CartProvider,useCartContext};
