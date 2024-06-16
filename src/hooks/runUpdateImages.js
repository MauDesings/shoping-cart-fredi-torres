import {updatedImages}  from '../hooks/updateImages.js'; // Importa la función updateImages correctamente
// Llama a la función updateImages y espera a que se complete
updatedImages()
  .then(() => {
    // Loggea un mensaje una vez que todas las imágenes han sido actualizadas
    console.log('Actualización de imágenes completada.');
  })
  .catch((error) => {
    // Loggea un mensaje de error si algo falla durante la actualización
    console.error('Error en la actualización de imágenes:', error);
  });
