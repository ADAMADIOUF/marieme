import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import BannerPerfumes from './BannerPerfumes'
import Loading from "../components/Loading"
import Error from '../components/Error'
import { useEffect } from 'react'

const Perfumes = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
 const { products, loading, error } = useProductsContext() 
if(loading){
  return<Loading/>
}
if (error) {
  return <Error />
}
  return (
    <div className='perfumes'>
      <BannerPerfumes/>
      <div className='perfumes-content section-center'>
        {products.map((product) => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div className='slide-content'>
                <img src={product.img} alt='' />
                <h3>{product.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Perfumes