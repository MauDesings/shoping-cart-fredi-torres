import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [data, setData] = useState( {productData:[], featureProducts: []} );
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        async function fetchData() {
            try {
                const db = getFirestore();
                const querySnapShop = await getDocs(collection(db,'products'));
                const newData = querySnapShop.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
                const featureData = newData.filter(item=> item.featured === true)
                
                setData((prev)=> ({...prev, productData: newData}));
                setData((prev)=> ({...prev, featureProducts: featureData}));
                setIsLoading(!isLoading);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
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


