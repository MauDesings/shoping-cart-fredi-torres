import { getFirestore, doc, updateDoc } from 'firebase/firestore'; // Importa los métodos necesarios desde Firebase
import { app } from './config.js'; // Importa tu configuración de Firebase

// Obtiene la instancia de Firestore usando la configuración de Firebase
const db = getFirestore(app);

const imagesToUpdate = [
  { id: 'qIYZDshGwuD9F5lHxVMV', image: 'https://firebasestorage.googleapis.com/v0/b/mau-ecommerce.appspot.com/o/products%2Fpolera-rosada-1.jpg?alt=media&token=74755a42-9113-4e13-94e1-9f2fba59a607' },
  { id: 'AEPswCACtUN3S5pRMM3U', image: 'https://firebasestorage.googleapis.com/v0/b/mau-ecommerce.appspot.com/o/products%2Fcasaca-franela--2.jpg?alt=media&token=39620ff6-6e1a-4433-97de-fa5080e91f4f' },
  { id: 'eeocLLLaSRBNT4YzL0Nw', image: 'https://firebasestorage.googleapis.com/v0/b/mau-ecommerce.appspot.com/o/products%2Fpolera-estampada-negro-3.jpg?alt=media&token=1ed026ff-6daa-4a34-b15c-8b34462db5be' },
  { id: 'PO6N9sjU3hIvWdRdNEW6', image: 'https://firebasestorage.googleapis.com/v0/b/mau-ecommerce.appspot.com/o/products%2F2092275848942-4.jpg?alt=media&token=c1f9a82e-3712-4c84-8e0a-f0f5914d4a9d' },
  { id: 'HFSXAcEY7jcODmuPXHuV', image: 'https://firebasestorage.googleapis.com/v0/b/mau-ecommerce.appspot.com/o/products%2Fsaco-cuerina-5.jpg?alt=media&token=40624765-9d06-4dda-bb41-3d2130a7981e' },
  { id: 'ppGiaVB3cUkWJWle2N43', image: 'https://firebasestorage.googleapis.com/v0/b/mau-ecommerce.appspot.com/o/products%2F2092294883863_6.jpg?alt=media&token=fd6db693-e65b-4d3f-b1e2-b767d0bd8ab8' },
  { id: '6Q9p0ghAsdjRXnweBcfa', image: 'https://firebasestorage.googleapis.com/v0/b/mau-ecommerce.appspot.com/o/products%2Fabrigo-de-peluche-7.jpg?alt=media&token=179c26f8-ffdf-4631-85f3-5f24e58b438b' },
  { id: '62MzKZDaZyiSjiCRCBzn', image: 'https://firebasestorage.googleapis.com/v0/b/mau-ecommerce.appspot.com/o/products%2F2016272908003-8.jpg?alt=media&token=654a3b5b-8c8c-45a3-8c27-888450c13fd7' },
  { id: 'piRtQSW7FKqdU7mHXMCG', image: 'https://firebasestorage.googleapis.com/v0/b/mau-ecommerce.appspot.com/o/products%2Fchaleco-reversible-9.jpg?alt=media&token=0a2a4c3f-fc8e-429b-ae40-3dc0c544fd83' },
  { id: '7qbWmNZUupat9tHAnhBF', image: 'https://firebasestorage.googleapis.com/v0/b/mau-ecommerce.appspot.com/o/products%2Fpolera-verde-10.jpg?alt=media&token=74505263-9ff0-45ab-868f-5445572e0d86' },
  { id: 'OzJBAHg6tQsh6Vx5fVFk', image: 'https://firebasestorage.googleapis.com/v0/b/mau-ecommerce.appspot.com/o/products%2F2092310633458_11.jpg?alt=media&token=cd8b2991-886c-421c-a9ce-a8877de205e4' },
  { id: 'NJDb12nYNR6nPE9YxRa0', image: 'https://firebasestorage.googleapis.com/v0/b/mau-ecommerce.appspot.com/o/products%2FTUZE-2023-12.jpg?alt=media&token=291999e3-a7ea-4c4b-9348-7389efeb9bb0' },
  { id: 'NIgV5P5dsVAEUsZXu8pt', image: 'https://firebasestorage.googleapis.com/v0/b/mau-ecommerce.appspot.com/o/products%2Fshort-negro-13.jpg?alt=media&token=4fd07be0-ec3a-453d-a81e-7ac0e93067ff' },
  { id: 'h4EAsCz2hlkNqz9s1PGf', image: 'https://firebasestorage.googleapis.com/v0/b/mau-ecommerce.appspot.com/o/products%2Fconjunto-polera-14.jpeg?alt=media&token=075a54f9-782d-4066-b979-d593ef2cec5e' },
  { id: 'EddTtvOdYY0RJNKZZi1a', image: 'https://firebasestorage.googleapis.com/v0/b/mau-ecommerce.appspot.com/o/products%2Fpolo-naranja-15.jpg?alt=media&token=d384eeb1-c042-4377-a452-73943137608b' }
];  
  

  async function updatedImages() {
    const updatePromises = imagesToUpdate.map(async (item) => { // Itera sobre cada imagen actualizada creando un nuevo array de promesas
      const docRef = doc(db, 'products', item.id);  // Obtiene la referencia del documento con el ID especifico
      try {
        await updateDoc(docRef, { image: item.image }); // Actualiza el documento con la nueva imagen
        console.log(`Documento ${item.id} actualizado correctamente.`);
      } catch (error) {
        console.error(`Error actualizando documento ${item.id}:`, error);
      }
    });
  
    await Promise.all(updatePromises);
    console.log("Todas las imágenes han sido actualizadas.");
  }

  export {updatedImages}; // Exporta la función para su uso externo si es necesario

