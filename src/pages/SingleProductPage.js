import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constant'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,

 
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const SingleProductPage = () => {
const navigate = useNavigate()

 const {
   single_product_loading: loading,
   single_product_error: error,
   single_product: product,
   fetchSingleProduct,
 } = useProductsContext()
  const { id } = useParams()
  
   useEffect(() => {
     fetchSingleProduct(`${url}${id}`)
   }, [id])

   useEffect(()=>{
   if(error){
     setTimeout(() => {
navigate("/")
     },3000)
   }
   },[error])
  
 if (loading) {
   return <Loading />
 }

 if (error) {
   return <Error />
 }
 const {
   name,
   price,
   desc,
   id: sku,
   img,
 } = product
  return (
    <Wrapper>
      <div className='section section-center page'>
        <Link to={`/`} className='btn'>
          retour aux produits
        </Link>
        <div className='product-center'>
          <ProductImages images={img} />
          <section className='content'>
            <h2>{name}</h2>

            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{desc}</p>

            <p className='info'>
              <span>SKU:</span>
              {sku}
            </p>

            <hr />
            <AddToCart product={product} />
          </section>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-1);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
  .btn{
    background:var(--clr-primary-1);
    color:#000;
  }
`
export default SingleProductPage
