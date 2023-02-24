import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import slide from '../components/dataSlider'


const Slider = () => {
  const [indexSlide, setIndexSlide] = useState(0)

  useEffect(() => {
    const lastIndex = slide.length - 1
    if (indexSlide < 0) {
      setIndexSlide(lastIndex)
    }
    if (indexSlide > lastIndex) {
      setIndexSlide(0)
    }
  })
  useEffect(() => {
    let slider = setInterval(() => {
      setIndexSlide(indexSlide + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  })
  return (
    <Wrapper className='section-slider'>
      <div className='slide'>
        {slide.map((slide, slideIndex) => {
          let slider = 'nextSlide'
          if (slideIndex === indexSlide) {
            slider = 'activeSlide'
          }
          if (
            slideIndex === indexSlide - 1 ||
            (indexSlide === 0 && slideIndex === slide.length - 1)
          ) {
            slider = 'lastSlide'
          }
          const { id,  desc, image } = slide
          return (
            <div key={id}>
              <address className={slider}>
                <img src={image} alt='' className='img-slide' />
                <div className="slide-content">
                  <p>{desc}</p>
                </div>
              </address>
            </div>
          )
        })}
        <button className='prev' onClick={() => setIndexSlide(indexSlide - 1)}>
          précédent
        </button>
        <button className='next' onClick={() => setIndexSlide(indexSlide + 1)}>
          suivant
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 
    min-height: 100vh;
    display: grid;
    place-items: center;
    margin-top:3rem;
  

  .img-container {
    display: none;
  }
  .img-slide {
    width: 100%;
    height: 100vh;
  }
  .slide {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    text-align: center;
    margin: 2rem auto;
  }
  .slide-content {
    position: absolute;
    top: 30rem;
    left: 10rem;
    color: #fff;
    display:none;
  }
  .slide-content p {
    font-size: 3rem;
    text-transform: uppercase;
  }
  .prev,
  .next {
    position: absolute;
    top: 200px;
    transform: translateY(-50%);
    background: var(--clr-primary-1);
    color: var(--clr-black);
    width: 6.5rem;
    height: 2.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
    text-transform: uppercase;
  }
  .prev:hover,
  .next:hover {
    background: var(--clr-black);
    color: var(--clr-white);
  }
  .prev {
    left: 0rem;
    text-orientation: mixed;
    text-orientation: upright;
    text-orientation: sideways-right;
    text-orientation: sideways;
    text-orientation: use-glyph-orientation;
  }
  .next {
    right: 3rem;
  }

  address {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: var(--transition);
  }
  address.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  address.lastSlide {
    transform: translateX(-100%);
  }
  address.nextSlide {
    transform: translateX(100%);
  }
  @media (min-width: 768px) {
    .text {
      max-width: 45em;
    }
     .slide-content {
      display:flex;
     }
  }
  @media (min-width: 992px) {
    .img-slide {
      width: 100%;
      height: 100vh;
    }
    .slide {
      height: 800px;
    }
    .prev,
    .next {
      top: 300px;
    }
     .slide-content{
      top:20rem;
      max-width:30rem
     }
  }
`

export default Slider
