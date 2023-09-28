import React from 'react'
import ItemList from '../../components/itemList/ItemList'
import './appProduct.css';
import { useProductContext } from '../../context/ProductContext';

const AppProduct = ({greeting}) => {
  const {data,isLoading} = useProductContext();

  if (isLoading) return <h2 className='items__description'>CARGANDO....</h2>

  return (
    <>
        <h2 className='title'>{greeting}</h2>
        <div className='items-content-grid'>
          {
            data.map(item => (
              <ItemList key={item.id} {...item} />
            ))
          }
        </div>
    </>
  )
}

export default AppProduct