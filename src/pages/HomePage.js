import React from 'react'
import { FeaturedProducts, Slider, FirstCategories } from '../components'
import FeaturedTwo from '../components/FeaturedTwo'
import Gallery from '../components/Gallery'
import LastBanner from '../components/LastBanner'
import LastCategories from '../components/LastCategories'

import Reviews from '../components/Reviews'

const HomePage = () => {
  return (
    <div>
      <Slider />
      <FirstCategories />
      <FeaturedProducts />
     
      <LastBanner />
      <LastCategories />
      <Gallery />
      <Reviews />
    </div>
  )
}

export default HomePage
