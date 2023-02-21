import React from 'react'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import logo from '../assets/footerl.png'
import img1 from "../assets/contact.png"
import img2 from '../assets/contcat1l.png'
import img3 from '../assets/contactl2.png'
import img4 from '../assets/locationl3.png'
import img5 from '../assets/bnner-c.png'
import Map from './Map'
const Contact = () => {
  return (
    <Wrapper>
      <div className='contact'>
        <div className='contact-img'>
          <img src={img1} alt='' />
        </div>
        <div className='contact-details'>
          <motion.h2
            initial={{ x: 1000, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            cosmétique bio
          </motion.h2>
          <motion.h3
            initial={{ x: -1000, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            contactez nous{' '}
          </motion.h3>
          <motion.h5
            initial={{ x: 1000, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Rem's Clamour
          </motion.h5>
        </div>
        <div className=' section-center contact-address-container'>
          <article>
            <img src={img2} alt='' />
            <h3>adress</h3>
            <h6>fatick,senegal</h6>
          </article>
          <article>
            <img src={img3} alt='' />
            <h3>phone</h3>
            <h6>+221775000000</h6>
            <h6>+221775000000</h6>
          </article>
          <article>
            <img src={img4} alt='' />
            <h3>email</h3>
            <h6>remsclamour@gmail.com</h6>
          </article>
        </div>
        <div className='map-map'>
          <Map />
        </div>
        <div className='contact-form'>
          <div className='contact-form-container'>
            <article>
              <form className='form-contact'>
                <h3>envoyer le message</h3>

                <div>
                  <input
                    type='text'
                    placeholder='nom complet *'
                    className='input-form'
                  />
                  <input
                    type='email'
                    placeholder='email *'
                    className='input-form'
                  />
                </div>
                <div>
                  <input
                    type='text'
                    placeholder='sujet '
                    className='input-form'
                  />
                </div>
                <div>
                  <textarea
                    name=''
                    id=''
                    cols='30'
                    rows='10'
                    className='input-form'
                  ></textarea>
                </div>
                <button className='btn-contact'>envoyer message</button>
              </form>
            </article>
            <article>
              <img src={img5} alt='' className='img-c-banner' />
            </article>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.contact{
  margin-top:5rem;
}
  .form-contact h3 {
    color: var(--clr-primary-1);
    text-align: center;
    font-size: 2rem;
  }
  .contact-img {
    position: relative;
  }
  .contact-img img {
    width: 100%;
    height: 800px;
  }
  .contact-details {
    position: absolute;
    top: 50%;
    left: 30%;
  }
  .contact-details h2 {
    color: #000;
    font-size: 2rem;
  }
  .contact-details h3 {
    color: var(--clr-primary-1);
    font-size: 2rem;
  }
  .contact-details h5 {
    color: var(--clr-primary-1);
    font-size: 3rem;
  }
  .contact-address-container {
    margin-top: 5rem;
  }
  .contact-address-container img {
    width: 150px;
    height: 150px;
  }
  @media screen and (min-width: 425px) {
    .contact-address-container {
      display: grid;
      gap: 5rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 992px) {
    .contact-address-container {
      display: grid;
      gap: 5rem;
      grid-template-columns: repeat(3, 1fr);
    }
    .contact-details h2 {
      font-size: 4rem;
    }
    .contact-details h3 {
      font-size: 5rem;
    }
    .contact-details h5 {
      font-size: 4rem;
    }
  }
  .contact-form {
    margin-top: 2rem;
    margin: 1rem;
  }
  .input-form {
    width: 90%;
    padding: 0.75rem;
  }
  div .input-form {
    margin: 1rem;
  }
  .btn-contact {
    padding: 1rem 3rem;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: var(--spacing);
    background: var(--clr-primary-1);
    cursor: pointer;
    transition: var(--transition);
    margin:0 auto;
    display:block;
  }
  .btn-contact:hover {
    background: var(--clr-black);
    color: #fff;
  }
  .img-c-banner {
    width: 100%;
    margin-top: 5rem;
  }
`
export default Contact
