import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constant'
import { formatPrice } from '../utils/helpers'
import Error from '../components/Error'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import ProductImages from '../components/ProductImages'

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
    window.scrollTo(0, 0) // Scroll to the top of the page
    fetchSingleProduct(`${url}${id}`)
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [error])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }
  const { name, price, desc, id: sku, img } = product
  return (
    <>
      <div className='section section-center page'>
        <Link to={`/`} className='btn'>
          retour aux produits
        </Link>
        <div className='product-center'>
          <ProductImages images={img} />
          <section className='content productDetails'>
            <h2>{name}</h2>
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{desc}</p>
            <hr />
          </section>
        </div>
      </div>
    </>
  )
}

export default SingleProductPage
