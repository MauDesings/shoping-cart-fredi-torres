import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import AppProduct from './pages/product-store/AppProduct'
import AppHome from './pages/home/AppHome'
import AppContact from './pages/contact/AppContact'
import Footer from './components/footer/Footer'
import AppCart from './pages/cartContent/AppCart'
import CategoriesProductList from './pages/categoryProductList/CategoriesProductList'
import AppCategories from './pages/categories/AppCategories'

function App() {
    const greeting = 'Welcome';

  return (
    <>
        <header className='header'>
            <Navbar />
        </header>

        <main>
            <section className='section'>
    
                <div className='container'>
                    <Routes>
                        <Route exact path="/" element={<AppHome />} />
                        <Route exact path="/categories" element={<AppCategories />} />
                        <Route exact path="/product" element={<AppProduct greeting={greeting} />} />
                        <Route exact path="/category/:categoryId" element={<CategoriesProductList />} />

                        <Route exact path="/contact" element={<AppContact />} />
                        <Route exact path="/cart" element={<AppCart />} />
                    </Routes>
                </div>

            </section>
        </main>
        <Footer />
    </>
  )
}

export default App