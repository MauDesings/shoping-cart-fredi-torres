import ItemList from '../../components/itemList/ItemList'
import { useProductContext } from '../../context/ProductContext';
import { useParams } from 'react-router-dom';

const CategoriesProductList = () => {
    const {data,isLoading} = useProductContext();
    const {categoryId} = useParams();

    if (isLoading) return <h2 className='items__description'>CARGANDO....</h2>

    const categoryFilter = data.productData.filter(item => item.category.toLowerCase() === categoryId.toLowerCase());
    
  return (
       <div className='items-content-grid'>
          {
            categoryFilter.map(item => (
              <ItemList key={item.id} {...item} />
            ))
          }
        </div>
  )
}

export default CategoriesProductList
