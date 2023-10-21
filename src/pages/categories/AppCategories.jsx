import React from 'react'
import { useProductContext } from '../../context/ProductContext';
import './appCategories.css'
import { NavLink } from 'react-router-dom';
import ItemList from '../../components/itemList/ItemList';

const AppCategories = () => {
  const { categoryOnlyData, data } = useProductContext();

  return (
    <>
        <h2 className='filter__title-category'>Compra Por Categorias</h2>
        <div className='filter__content-buttons'>
            {
                categoryOnlyData.map((item,index)=> (
                    <NavLink key={index} to={`/category/${item}`}>
                        <button
                            className='filter__buttons'>
                            {item}  
                        </button>
                    </NavLink>
                ))
            }
        </div>

        <div className='items-content-grid'>
                {
                data.featureProducts.map(item => (
                    <ItemList key={item.id} {...item} />
                ))
                }
        </div>
    </>
  )
}

export default AppCategories;
