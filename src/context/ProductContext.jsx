import React, { createContext, useContext, useEffect, useState } from 'react';
import product from '../mocks/product.json';


const AppContext = createContext();

const AppProvider = ({children}) => {
    const [data, setData] = useState( {productData:[], featureProducts: []} );
    const [isLoading, setIsLoading] = useState(true);

    function productPromise(apimonck) {
        return new Promise(resolve => setTimeout(() =>  resolve(apimonck) , 1000))
    }

    // OBTENER LOS PRODUCTOS 
    useEffect(()=>{
        async function getProducts(product) {
            try {
                const response = await productPromise(product);
                const featureData = response.filter(item=> item.featured === true)
                setData((prev)=> ({...prev, productData: response}));
                setData((prev)=> ({...prev, featureProducts: featureData}));
                setIsLoading(!isLoading);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts(product);
    },[])


    // Obtener los datos unicos (categorias)
    function getUniqueData(products, property) {
        let newValue = products.productData.map(item => item[property])
        return (newValue = [...new Set(newValue)]);
    }
    const categoryOnlyData = getUniqueData(data, 'category');  


  return (
    <AppContext.Provider value={{ data, isLoading, categoryOnlyData }}>
        {children}
    </AppContext.Provider>
  )
}

// custon hook
const useProductContext = () => useContext(AppContext);
export { AppProvider, AppContext, useProductContext };


