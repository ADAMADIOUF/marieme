import React from 'react'
import s from '../assets/s.png'
import { Link } from 'react-router-dom'
const SecondBanner = () => {
  return (
    <div className='second-banner'>
      <Link to={`/perfumes`}>
        <img src={s} alt='' className='second-banner-img' />
      </Link>
    </div>
  )
}

export default SecondBanner
