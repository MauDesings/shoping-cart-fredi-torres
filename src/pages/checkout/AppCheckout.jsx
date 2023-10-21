import React from 'react'
import { useCartContext } from '../../context/CartContext';
import './appCheckout.css'

const AppCheckout = () => {
    const { state, handleInputChange, sendForm, errors } = useCartContext();

    
  return (
    <div className='column-form'>
        <h2 className='sub-title'>Completa el formulario</h2>
        <form className='form' onSubmit={sendForm}>
            <div className='form__group'>
                <label htmlFor="name">Nombre</label>
                <input type="text" id='name' name='name' value={state.user.name} onChange={handleInputChange} />
                {errors.name ? <p className='danger'>{errors.name}</p> : <p className='error'>error</p>}
            </div>

            <div className='form__group'>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' name='email' value={state.user.email} onChange={handleInputChange} />
                {errors.email ? <p className='danger'>{errors.email}</p> : <p className='error'>error</p>}
            </div>

            <div className='form__group'>
                <label htmlFor="fhone">Teléfono</label>
                <input type="text" id='fhone' name='fhone' value={state.user.fhone} onChange={handleInputChange} />
                {errors.fhone ? <p className='danger'>{errors.fhone}</p> : <p className='error'>error</p>}
            </div>
            
            <div className='form__group'>
                <label htmlFor="addres">Dirección</label>
                <input type="text" id='addres' name='addres' value={state.user.addres} onChange={handleInputChange} />
                {errors.addres ? <p className='danger'>{errors.addres}</p> : <p className='error'>error</p>}
            </div>

            <button className={state.cart.length ? 'confirm' : 'confirm disab'} type='submit'  disabled={state.cart.length ? '' : 'disabled '}>Confirmar compra</button>
        </form>
    </div>
  )
}

export default AppCheckout
