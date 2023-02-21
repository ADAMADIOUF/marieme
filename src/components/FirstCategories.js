
import React, { useState,useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'
import img1 from "../assets/a1.jpeg"
import imgs from '../assets/bshoes.jpeg'
import imgm from '../assets/bmakup.jpeg'
import img2 from '../assets/a2.jpeg'
import img3 from '../assets/leaf.png'
import img4 from '../assets/shoes.png'
import img5 from '../assets/concealer.png'
import img6 from '../assets/sakura.png'
import img7 from '../assets/sall.png'
import img8 from '../assets/banner1.png'
import ProgreBar from './ProgreBar'
const FirstCategories = () => {
  const [isOpen, setOpen] = useState(false)
useEffect(() => {
  AOS.init({
    offset: 300,
    duration: 1000,
    delay: 50,
    easing: 'ease-in-out',
  })
}, [])
  return (
    <Wrapper>
      <div className='section first-categories'>
        <div className='first-categories-container'>
          <article className='first-categories-details border-1'>
            <img src={img1} alt='' data-aos='fade-up ' />
            <div className='first-categories-info'>
              <h3>collection de fleurs de parfum</h3>
              <button className='btn-first-cat'>acheter maintenant</button>
            </div>
          </article>
          <article className='first-categories-details border-1'>
            <img src={img2} alt='' data-aos='fade-right ' />
            <div className='first-categories-info'>
              <h3>collection de fleurs de parfum</h3>
              <button className='btn-first-cat'>acheter maintenant</button>
            </div>
          </article>
          <article className='first-categories-details border-1'>
            <img src={imgs} alt='' data-aos='fade-up ' />
            <div className='first-categories-info'>
              <h3>collection de chaussures</h3>
              <button className='btn-first-cat'>acheter maintenant</button>
            </div>
          </article>
          <article className='first-categories-details border-1'>
            <img src={imgm} alt='' data-aos='fade-right ' />
            <div className='first-categories-info'>
              <h3>collection de makeup</h3>
              <button className='btn-first-cat'>acheter maintenant</button>
            </div>
          </article>
        </div>
        <div className='section-center categories'>
          <div className='categories-title'>
            <h3 data-aos='fade-up '>Catégorie</h3>
            <h2 data-aos='fade-right '>fragrance types</h2>
            <p data-aos='fade-up '>
              Avec ses notes florales, musquées et boisées, Valaya est une
              fragrance radieuse qui dévoile toute la sensualité de la peau
              caressée d’un voile de coton.
            </p>
          </div>
          <div className='container-categories-2'>
            <article>
              <span>
                <img src={img3} alt='' data-aos='fade-up ' />
              </span>
              <h3>Frais fragrances</h3>
              <p>nos parfums iconiques</p>
            </article>
            <article>
              <span>
                <img src={img4} alt='' data-aos='fade-right ' />
              </span>
              <h3>nos chaussures </h3>
              <p>Un si beau pas propose des chaussures</p>
            </article>
            <article>
              <span>
                <img src={img5} alt='' data-aos='fade-up ' />
              </span>
              <h3>le maquillage</h3>
              <p>maquillage pas cher rem's clamour</p>
            </article>
            <article>
              <span>
                <img src={img6} alt='' data-aos='fade-right ' />
              </span>
              <h3>frais fragrances</h3>
              <p>nos parfums iconiques</p>
            </article>
          </div>
          <div className='perfect-perfume'>
            <div className='section-center perfect-fume-container'>
              <article className='perfect-1'>
                <h3>
                  Boutique de la perfumerie,les nouveautés à ne pas manquer
                </h3>
                <h5>les nouveautés à ne pas manquer</h5>
              </article>
            </div>
            <article className='modal-img'>
              <img src={img7} alt='' />
            </article>
            <ProgreBar />
          </div>
        </div>
      </div>

      <div className='first-banner'>
        <img src={img8} alt='' />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .first-categories-details {
    position: relative;
    margin: 2rem;
  }
  .categories-title {
    text-align: center;
  }
  .categories-title h3 {
    color: var(--clr-primary-1);
    font-size: 2.5rem;
  }
  .categories-title p {
    max-width: 45rem;
    font-size: 1.5rem;
    margin-top: 2rem;
  }
  
  .perfect-1 {
    max-width: 35rem;
  }
  .first-banner {
    margin-top: 5rem;
  }
  .first-banner img {
    width: 100%;
  }
  
  .modal-img img{
    width:100%;
  }
  .first-categories-details img {
    width: 100%;
    height: 400px;
  }
  .first-categories-info {
    position: absolute;
    top: 30%;
    left: 30%;
  }
  .first-categories-info h3 {
    color: grey;
    font-size: 2rem;
    background: #fff;
  }
  .btn-first-cat {
    position: relative;
    padding: 0.75rem;
    font-size: 1rem;
    text-transform: uppercase;
    background: var(--clr-primary-1);
    border: 1px solid #000;
    color: #333;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    cursor: pointer;
  }
  .btn-first-cat:hover {
    background: var(--clr-white);
    color: var(--clr-black);
  }
  .border-1 {
    position: relative;
  }
  .border-1::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 20rem;
    margin: -1rem;
    border: 1px solid var(--clr-black);
  }
  @media (min-width: 992px) {
    .first-categories-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }
    .img-video {
      width: 500px;
    }
  }
  @media (min-width: 576px) {
    .container-categories-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }
  }
  @media (min-width: 992px) {
    .container-categories-2 {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .container-categories-2 article {
    margin-top: 5rem;
  }
  .container-categories-2 img {
    width: 100%;
  }
  .perfect-fume-container {
    margin-top: 5rem;
  }
  @media (min-width: 992px) {
    .perfect-fume-container {
      display: grid;
      gap: 5rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`
export default FirstCategories
