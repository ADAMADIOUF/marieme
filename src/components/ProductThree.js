import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'

import { Link } from 'react-router-dom'
const ProductThree = ({ img, name, price, id }) => {
  return (
    <Wrapper>
      <div className='container productTwo'>
        <Link to={`/products/${id}`}>
          <img src={img} alt={name} />
        </Link>
      </div>

      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-primary-1);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
   
  }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 2rem;
    display: flex;
  gap:5rem;
    border:1px solid #000;
  }
    
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
    padding:1rem;
  }

  footer p {
    color: var(--clr-primary-1);
    letter-spacing: var(--spacing);
  }
`
export default ProductThree
