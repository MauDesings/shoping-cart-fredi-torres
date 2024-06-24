import React, { useState } from 'react'
import ProductModal from '../productInfoModal/ProductModal';
import './items.css'


const ItemList = (item) => {
    const [show, setShow] = useState(false);
    const { image,title,price,category } = item;

  return (
    <>
        <div className='items'>
            <img className='items__imagge' src={image} alt={title} />

            <div className='items__info'>
                <h3 className='items__subtitle'>{title}</h3> 
                <p className='items__price'>precio: ${price}</p>
                <p className='items__price'>categoria: {category}</p>
            </div>

            <div className='items__buttons'>
                <button className='items__btn-details' onClick={()=>setShow(!show)}>Más información</button>
            </div>
        </div>

        {
            <ProductModal item={item} show={show} setShow={setShow}/>
        }
    </>
  )
}

export default ItemList