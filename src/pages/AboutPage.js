import React from 'react'
import styled from 'styled-components'
import img1 from "../assets/about.jpeg"
import img2 from '../assets/sall1.png'
import logo from '../assets/footerl.png'
const AboutPage = () => {
  return (
    <Wrapper>
      <div className='about'>
        <div className='about-img'>
          <img src={img1} alt='' />
        </div>
        <div className='about-container'>
          <article className='about-first-img'>
            <img src={img2} alt='' />
            <img src={logo} alt="rems' clamour" className='logo-img' />
          </article>
          <article className='about-details'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .about {
    position: relative;
  }
  .about-details p {
    color:#fff;
  }
  .about-img {
    position: relative;
  }
  .about-img img {
    width: 100%;
    height: 600px;
  }
  .about-first-img img {
    width: 100%;
  }
  .about-container {
    position: absolute;
    top: 0%;
    left: 30%;
  }
  .logo-img{
    
  } @media (min-width: 992px) {
    .about-container {
      display: grid;
      gap: 5rem;
      grid-template-columns: repeat(2, 1fr);
    }
    .about-details {
      margin-top: 5rem;
    }
  }
`
export default AboutPage
