import React from 'react'
import { useProductsContext } from '../context/products_context'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constant'
import logo from '../assets/remslogo1.png'

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useProductsContext()
 
  return (
    <SidebarContainer>
      <aside className={isSidebarOpen ? 'show-sidebar sidebar' : 'sidebar'}>
        <div className='sidebar-header'>
          <img src={logo} alt="rems' clamour" className='logo' />
          <button type='button' className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <a href={url} onClick={closeSidebar}>
                  {text}
                </a>
              </li>
            )
          })}
         
        </ul>
       
      </aside>
    </SidebarContainer>
  )
}
const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-1);
    transition: var(--transition);
    cursor: pointer;
   
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-black);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-primary-1);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`
export default Sidebar
