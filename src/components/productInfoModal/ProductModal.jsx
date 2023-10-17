import {RiCloseFill} from 'react-icons/ri'
import { useCartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';
import './productModal.css'

const ProductModal = ({item, open, setOpen}) => {
    const {image,title,price,category,description,id} = item;
    const { handleAdd } = useCartContext();

  return (
    <div className={ open ? 'single__modal show' : 'single__modal'}>
        
        <div className='single__content container'>
            <RiCloseFill className='single__icon' onClick={()=>{setOpen(!open)}} />
            <div className='column single__column-rigth'>
                <img className='single__img' src={image} alt={title} />
            </div>
          
            <div className='column single__info'>
                <div>
                    <h3 className='single__category'>{category}</h3>
                    <h2 className='single__title'>{title}</h2>
                </div>

                    <p className='single__price'>${price}</p>

                <div>
                    <p className='single__description'>{description}</p>
                    <div  className='single__buttons'>
                        <button className='items__btn-add' onClick={()=> handleAdd(id)}>Add Product</button>
                        <NavLink to='/cart'>
                        <button className='items__btn-add'>Go to Cart</button>
                        </NavLink>
                    </div>
                </div>    
            </div>
        </div>

    </div>
  )
}

export default ProductModal
