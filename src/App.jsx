import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import ProductList from './pages/ProductList'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/edit/:id' element={<EditProduct />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App