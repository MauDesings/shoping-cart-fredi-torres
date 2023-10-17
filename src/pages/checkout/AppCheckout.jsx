import React from 'react'
import { useCartContext } from '../../context/CartContext';
import './appCheckout.css'

const AppCheckout = () => {
    const { state, handleInputChange, handleAddOrder, sendForm } = useCartContext();
    

    function handleForm(e) {
        e.preventDefault();
        handleAddOrder();
        sendForm();
    }

  return (
    <div className='column'>
        <h2 className='sub-title'>Formulario</h2>
        <form className='form' onSubmit={handleForm}>
            <div className='form__group'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' value={state.user.name} onChange={handleInputChange} />
            </div>

            <div className='form__group'>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' name='email' value={state.user.email} onChange={handleInputChange} />
            </div>

            <div className='form__group'>
                <label htmlFor="fhone">Fhone</label>
                <input type="text" id='fhone' name='fhone' value={state.user.fhone} onChange={handleInputChange} />
            </div>
            
            <div className='form__group'>
                <label htmlFor="addres">Addres</label>
                <input type="password" id='addres' name='addres' value={state.user.addres} onChange={handleInputChange} />
            </div>

            <button type='submit'>Continue</button>
        </form>
    </div>
  )
}

export default AppCheckout
