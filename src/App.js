import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import SingleProductPage from './pages/SingleProductPage'
import Perfumes from './components/Perfumes'
import Brands from './components/Brands'
import Offers from './components/Offers'
import Blog from './components/Blog'
import Contact from './components/Contact'
import About from './components/About'
import WhatsAppButton from './components/WhatssapButton'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <WhatsAppButton/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/perfumes' element={<Perfumes />} />
        <Route path='/brands' element={<Brands />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App