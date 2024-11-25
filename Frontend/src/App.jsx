import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {Routes, Route} from "react-router-dom"
import CartSection from './components/Cart/CartSection'
import Home from './components/Home/Home'
import SculptureSection from './components/SculptureShop/SculptureSection'
import ContactUs from './components/Contact/ContactUs'
import ProductDetails from './components/Product/ProductDetails'
import CustomPage from './components/CustomProduct/CustomPage'
import Register from './components/Register/Register'
import NewProduct from './components/Product/NewProduct'
import SculptureForm from './components/Forms/SculptureForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/cart' element={<CartSection/>} />
      <Route path='/sculpture' element={<SculptureSection/>} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/product" element={<NewProduct />} />
      <Route path='/custom' element={<CustomPage/>} />
      <Route path='/contact-us' element={<ContactUs/>} />
      <Route path='/sculpture-form' element={<SculptureForm/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
