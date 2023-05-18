import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useProductsContext } from '../context/products_context'
const FeaturedOne = () => {
  const sliderRef = useRef(null)
  const {
    featured_one_products: products,
    loading,
    error,
  } = useProductsContext()

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className='product-list'>
      <div className='section-center'>
        <div className='slider-container'>
          <Slider ref={sliderRef} {...sliderSettings} className='slider'>
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
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default FeaturedOne
