import React from 'react'
import b from '../assets/banner1.png'
const Banner = () => {
  return (
    <div className='banner'>
      <img src={b} alt='Banner Image' className='banner-image' />
      <div className='banner-content'>
        <a href='/perfumes' className='banner-button'>
          Acheter maintenant
        </a>
      </div>
    </div>
  )
}

export default Banner
