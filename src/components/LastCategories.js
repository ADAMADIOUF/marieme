import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/lastcat1.png'
import img2 from '../assets/lastcat2.jpeg'
import imgs from '../assets/shoes1.jpeg'
import img3 from '../assets/p1.jpeg'
import FeaturedThree from './FeaturedThree'

const LastCategories = () => {
  return (
    <Wrapper>
      <div
        className='
      last-categories'
      >
        <div className='last-categories-container'>
          <article className='last-categories-details'>
            <img src={img1} alt='' />
          </article>
          <article className='last-categories-details'>
            <img src={img2} alt='' />
          </article>
          <article className='last-categories-details'>
            <img src={imgs} alt='' />
          </article>
        </div>
        <div className='complete'>
          <div className='complete-container'>
            
            <article className='complete-img'>
              <img src={img3} alt='' />
            </article>
          </div>
        </div>
        <FeaturedThree/>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .last-categories {
    margin-top: 5rem;
  }
  .last-categories-details img {
    width: 100%;
    height: 400px;
  }

  @media (min-width: 992px) {
    .last-categories-container {
      display: grid;
      gap: 5rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .complete{
   margin-top:10rem;
  } 
  .complete-img img {
    width: 100%;
  }
  
`
export default LastCategories
