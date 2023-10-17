import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AppProvider } from './context/ProductContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import './index.css'
import { app } from './hooks/config.js'
console.log(app)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <CartProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </CartProvider>
    </AppProvider>
  </React.StrictMode>,
)