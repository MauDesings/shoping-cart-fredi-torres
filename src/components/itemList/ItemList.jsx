import React, { useState } from 'react'
import ProductModal from '../productInfoModal/ProductModal';
import './items.css'


const ItemList = (item) => {
    const [open, setOpen] = useState(false);
    const {image,title,price,category} = item;

  return (
    <>
        <div className='items'>
            <img className='items__imagge' src={image} alt={title} />

            <div className='items__info'>
                <h3 className='items__subtitle'>{title}</h3> 
                <p className='items__price'>Precio: ${price}</p>
                <p className='items__price'>categorie: {category}</p>
            </div>

            <div className='items__buttons'>
                <button className='items__btn-details' onClick={()=>setOpen(!open)}>Buy Now</button>
                <button className='items__btn-add'>Add Product</button>
            </div>
        </div>

        {
            <ProductModal item={item} open={open} setOpen={setOpen}/>
        }
    </>
  )
}

export default ItemList