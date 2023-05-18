import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenuLine } from 'react-icons/ri'
import logo from '../assets/logo.png'
import { animateScroll as scroll } from 'react-scroll'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleItemClick = () => {
    setIsMenuOpen(false)
  }
const scrollToTop = () => {
  scroll.scrollToTop()
  handleItemClick()
}
  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          <img src={logo} alt='Perfume Logo' onClick={scrollToTop} />
        </Link>
        <div
          className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={handleMenuToggle}
        >
          <RiMenuLine />
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to='/perfumes' onClick={handleItemClick}>
              parfums
            </Link>
          </li>
          <li>
            <Link to='/brands' onClick={handleItemClick}>
              marques
            </Link>
          </li>
          <li>
            <Link to='/offers' onClick={handleItemClick}>
              offres
            </Link>
          </li>
          <li>
            <Link to='/blog' onClick={handleItemClick}>
              Blog
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={handleItemClick}>
              À propos de nous
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={handleItemClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
