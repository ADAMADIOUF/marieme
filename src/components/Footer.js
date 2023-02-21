import React from 'react'
import styled from 'styled-components'
import { GrFacebookOption } from 'react-icons/gr'
import logo from '../assets/footerl.png'
import { FaTiktok } from 'react-icons/fa'
import img1 from "../assets/sall1.png"
import { AiFillInstagram } from 'react-icons/ai'
function Footer() {
  return (
    <Wrapper>
      <div className='footer'>
        <div className='section-center footer-container'>
          <article className='footer-logo'>
            <img src={logo} alt="rems' clamour" />
            <p>
              Soyez les premiers à être informés de nos nouveaux parfums, de nos
              offres exclusives et de nos événements.
            </p>
            <div className='footer-links'>
              <span>
                <GrFacebookOption />
              </span>
              <span>
                <AiFillInstagram />
              </span>
              <span>
                <FaTiktok />
              </span>
            </div>
          </article>
          <article className='footer-link-contact'>
            <h3>senegal fatick,ndouck 2</h3>
            <h5>+2217750000000</h5>
            <h5>+2217758022056</h5>
          </article>
          <article className='footer-img'>
            <img src={img1} alt='' />
          </article>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .footer {
    background: #000;
    color: #fff;
    padding: 1rem;
    
  }
  .footer-logo p{
    color:grey
  } .footer-links {
    margin-top: 2rem;
  }
  .footer-links span {
    font-size: 1rem;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid grey;
    border-radius: 50%;
    color: var(--clr-primary-1);
  }
  .footer-link-contact {
    margin-top: 3rem;
  }
  .footer-link-contact h3 {
    font-size: 1.5rem;
  }
  .footer-link-contact h5 {
    color: var(--clr-primary-1);
  }
  .footer-img img {
    width: 5rem;
    height: 5rem;
    border: 1px solid var(--clr-primary-1);
    border-radius: 50%;
  }
  @media screen and (min-width: 992px) {
    .footer-container {
      display: grid;
      gap: 5rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
export default Footer