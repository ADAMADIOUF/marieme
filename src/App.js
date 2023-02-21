import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer, Contact } from './components'
import {
  Home,
  About,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  Private,
} from './pages'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/contact' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

