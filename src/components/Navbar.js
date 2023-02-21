import React,{useState,useEffect} from 'react'
import logo from "../assets/remslogo1.png"
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constant'

import { useProductsContext } from '../context/products_context'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 200) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
    })
    let navbarClasses = ['navbar']
    if (scrolled) {
      navbarClasses.push('scrolled')
    }

  const { openSidebar } = useProductsContext()
  return (
    <NavContainer>
      <header className={navbarClasses.join(' ')}>
        <div className='nav-center'>
          <div className='nav-header'>
            <a href={`/`}>
              <img src={logo} alt="rems' clamour" className='logo' />
            </a>
            <button type='button' className='nav-toggle' onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className='nav-links'>
            {links.map((link) => {
              const { id, text, url } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </header>
    </NavContainer>
  )
}
const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }
  .logo{
    width:10rem;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-1);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 2rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-1);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
  .scrolled {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    background: var(--clr-white);
    z-index: 2;
    box-shadow: var(--light-shadow);
    
  }
`
export default Navbar
