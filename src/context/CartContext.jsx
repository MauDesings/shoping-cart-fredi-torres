import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { useProductContext } from './ProductContext';
import { cartReducer } from '../reducer/cartReducer';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import validation from '../hooks/validation';
import Swal from 'sweetalert2';

function getLocalCartData() {
    return JSON.parse(localStorage.getItem('cart-item')) || [];
}

const initialState = {
    cart : getLocalCartData(),
    totalItems: 0,
    totalPrice: 0,
    user: {name:'', email:'', fhone:'', addres:''}
}

const CartContext = createContext();

const CartProvider = ({children}) => {
    const {data} = useProductContext();
    const [state,dispach] = useReducer(cartReducer,initialState);
    const [errors,setErrors] = useState({}); // para el form de checkout


    function handleAdd(id,amount,setAmount) {
        if (amount > 0) {
            dispach({
                type: 'ADD_TO_CART',
                payload: {data, id, amount}
            })
            setAmount(0);
            handleItemsTotal();
            handlePricetotal();

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Agregado al carrito',
                showConfirmButton: false,
                timer: 1400
              })
              return;
        } 

        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Elija una cantidad',
            showConfirmButton: false,
            timer: 1400
          })
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

    
    // GET VALUE INPUTS
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
    }


    // SEND FORM
    function sendForm(e) {
        e.preventDefault();
        setErrors(validation(state.user))
    }

    // si no hay errores en el form se enviaran los datos a fireStore
    useEffect(()=>{
        const {name,email,fhone,addres} = state.user;
        if (Object.keys(errors).length === 0 && (name !== '' && email !== '' && fhone !== '' && addres !== '')) {
            Swal.fire(
                'Gracias!',
                'Compra exitosa',
                'success'
              )
              dispach({type:'RESET_FORM'})
              handleAddOrder();
              clearCart();
        }
    },[errors])


    // ADD LOCAL STORAGE
    useEffect(()=>{
        localStorage.setItem('cart-item', JSON.stringify(state.cart));
    },[state.cart]);

  return (
    <CartContext.Provider value={
       {
        state,
        handleAdd,
        handleDeleted,
        handleIncrement,
        handleDecrement,
        clearCart, 
        handleInputChange,
        handleAddOrder,
        sendForm,
        errors }}>

        {children}
    </CartContext.Provider>
  )
}

// custon hook
const useCartContext = () => useContext(CartContext);
export {CartProvider,useCartContext};
