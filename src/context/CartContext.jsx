import React, { createContext, useContext, useReducer } from 'react'
import { useProductContext } from './ProductContext';
import { cartReducer } from '../reducer/cartReducer';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2';


const initialState = {
    cart : [],
    totalItems: 0,
    totalPrice: 0,
    user: {name:'', email:'', fhone:'', addres:''}
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

    
    // UPDATE VALUE INPUTS
    function handleInputChange(e) {
        const {name,value} = e.target;
        dispach({type:'VALUE_INPUT_CHECKOUT', payload: {name,value}})
    }


    // CREATE ORDER
    const order = {
        buyer: state.user,
        item: state.cart.map(item => ({id: item.id, title: item.title, price: item.price, quantity: item.quantity})),
        total: state.totalPrice
    }

     // ADD ORDER FIRESTORE 
    function handleAddOrder() {
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
        .then(({id})=> console.log(id)) 

        clearCart();
    }

    // SEND FORM
    function sendForm() {
        Swal.fire(
            'thank you!!',
            'successful purchase',
            'success'
          )
    }

  return (
    <CartContext.Provider value={{state, handleAdd, handleDeleted, handleIncrement, handleDecrement, clearCart, handleInputChange, handleAddOrder, sendForm}}>
        {children}
    </CartContext.Provider>
  )
}

// custon hook
const useCartContext = () => useContext(CartContext);
export {CartProvider,useCartContext};
