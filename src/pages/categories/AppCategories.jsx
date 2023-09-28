import React from 'react'
import { useProductContext } from '../../context/ProductContext';
import './appCategories.css'
import { NavLink } from 'react-router-dom';

const AppCategories = () => {
  const { categoryOnlyData } = useProductContext();

  return (
    <>
        <h2 className='filter__title-category'>Category</h2>
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
    </>
  )
}

export default AppCategories;
