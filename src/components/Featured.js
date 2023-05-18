import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useProductsContext } from '../context/products_context'

const ProductList = () => {
  const { featured_products: products, loading, error } = useProductsContext()
  const [currentSlide, setCurrentSlide] = useState(0)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === products.length - 1 ? 0 : prevSlide + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? products.length - 1 : prevSlide - 1
    )
  }

  return (
    <div className='featured'>
      <div className='section-center'>
        <div className='slider-container-featured'>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <Link to={`/products/${product.id}`}>
                <div className='slide-content-featured'>
                  <img src={product.img} alt='' />
                  <p>
                    "Laissez-vous séduire par notre parfum envoûtant et sensuel.
                    Les notes chaudes de vanille et d'ambre se mêlent
                    harmonieusement aux accents fruités et floraux, créant une
                    expérience olfactive captivante et irrésistible."
                  </p>
                  <p>
                    "Plongez dans un voyage sensoriel avec notre parfum frais et
                    vivifiant. Ses notes d'agrumes pétillantes se mêlent à des
                    touches de menthe fraîche, créant une sensation de fraîcheur
                    revitalisante qui vous accompagne tout au long de la
                    journée."
                  </p>
                  <h3>{product.name}</h3>
                </div>
              </Link>
            </div>
          ))}
          <button className='prev-btn' onClick={prevSlide}>
            &lt;
          </button>
          <button className='next-btn' onClick={nextSlide}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductList
