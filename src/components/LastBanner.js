import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/b1.png'
import FeaturedTwo from './FeaturedTwo'
import ProductTwo from './ProductTwo'
const LastBanner = () => {
  return (
    <Wrapper>
      <div className='last-banner'>
        <img src={img1} alt='' />
      </div>
      <FeaturedTwo />
    </Wrapper>
  )
}
const Wrapper = styled.article`
.last-banner img{
 width:100%
}
`
export default LastBanner
