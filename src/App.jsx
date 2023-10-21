import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import AppProduct from './pages/product-store/AppProduct'
import AppHome from './pages/home/AppHome'
import Footer from './components/footer/Footer'
import AppCart from './pages/cartContent/AppCart'
import CategoriesProductList from './pages/categoryProductList/CategoriesProductList'
import AppCategories from './pages/categories/AppCategories'
import AppCheckout from './pages/checkout/AppCheckout'

function App() {
    const greeting = 'Te Damos La Bienvenida a';

  return (
    <>
        <header className='header'>
            <Navbar />
        </header>

        <main>
            <section className='section'>
    
                <div className='container'>
                    <Routes>
                        <Route exact path="/" element={<AppHome greeting={greeting} />} />
                        <Route exact path="/categories" element={<AppCategories />} />
                        <Route exact path="/product" element={<AppProduct />} />
                        <Route exact path="/category/:categoryId" element={<CategoriesProductList />} />

                        <Route exact path="/cart" element={<AppCart />} />
                        <Route exact path="/checkout" element={<AppCheckout />} />
                    </Routes>
                </div>

            </section>
        </main>
        <Footer />
    </>
  )
}

export default App