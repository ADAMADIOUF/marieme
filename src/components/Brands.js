import React from 'react'
import { useEffect } from 'react'

const Brands = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  const brands = [
    { id: 1, name: 'LA NUIT TRÉSOR EAU DE PARFUM', image: './images/m1.jpeg' },
    { id: 2, name: 'MISS DIOR EAU DE PARFUM', image: './images/m2.jpeg' },
    { id: 3, name: 'MON PARIS EAU DE PARFUM', image: './images/m3.jpeg' },
    // Add more brands here
  ]

  return (
    <div className='brands'>
      <div className='brands-container section-center'>
        {brands.map((brand) => (
          <div key={brand.id} className='brand-item'>
            <img src={brand.image} alt={brand.name} className='brand-image' />
            <h3 className='brand-name'>{brand.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brands
