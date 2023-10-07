import React from 'react'
import ItemList from '../../components/itemList/ItemList'
import './appProduct.css';
import { useProductContext } from '../../context/ProductContext';

const AppProduct = () => {
  const {data,isLoading} = useProductContext();

  if (isLoading) return <h2 className='items__description'>CARGANDO....</h2>

  return (
    <>
        <h2 className='title'>Products</h2>
        <div className='items-content-grid'>
          {
            data.productData.map(item => (
              <ItemList key={item.id} {...item} />
            ))
          }
        </div>
    </>
  )
}

export default AppProduct