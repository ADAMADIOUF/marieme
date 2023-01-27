import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {  FaWhatsapp } from 'react-icons/fa'


const AddToCart = ({ product }) => {
  
  return (
    <Wrapper>
      <div className='colors'>
        
        <a href=' https://wa.me/221779436804' className='btn-whatsapp'>
          <FaWhatsapp />
        </a>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn-whatsapp {
    margin-top: 1rem;
    width: 140px;
    color: #25d366;
    font-size: 2rem;
  }
`
export default AddToCart