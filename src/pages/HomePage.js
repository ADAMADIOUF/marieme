import React from 'react'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import LastBanner from "../components/LastBanner"
import DealsOne from '../components/DealsOne'
import Featured from "../components/Featured"
import DealsTwo from '../components/DealsTwo'
import FeaturedOne from '../components/FeaturedOne'
import FeaturedTwo from '../components/FeaturedTwo'
import { useEffect } from 'react'
import Gallery from '../components/Gallery'
const HomePage = () => {
  useEffect(()=>{
     window.scrollTo(0, 0)
  })
  return (
    <div>
      <Banner/>
      <ProductList/>
      <DealsOne/>
      <Featured/>
      <DealsTwo/>
      <FeaturedOne/>
      <LastBanner/>
      <FeaturedTwo/>
      <Gallery/>
    </div>
  )
}

export default HomePage