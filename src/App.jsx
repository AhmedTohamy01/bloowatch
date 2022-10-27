import { HomePage } from './pages/HomePage/HomePage'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { CartPage } from './pages/CartPage/CartPage'
import { Routes, Route, Link } from 'react-router-dom'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='product' element={<ProductPage />} />
      <Route path='cart' element={<CartPage />} />
    </Routes>
  )
}
