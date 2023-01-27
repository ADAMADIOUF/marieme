import React, { useState } from 'react'
import gallery from './../../src/imgGallery'
import styled from 'styled-components'
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsFileEarmarkExcelFill,
} from 'react-icons/bs'
const Gallery = () => {
  const [slideNumber, setSliderNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = (index) => {
    setSliderNumber(index)
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const prevSlide = () => {
    slideNumber === 0
      ? setSliderNumber(gallery.length - 1)
      : setSliderNumber(slideNumber - 1)
  }
  const nextSlide = () => {
    slideNumber + 1 === gallery.length
      ? setSliderNumber(0)
      : setSliderNumber(slideNumber + 1)
  }
  return (
    <Wrapper>
      {openModal && (
        <div className='sliderWrap'>
          <BsFileEarmarkExcelFill
            className='btnClose'
            onClick={handleCloseModal}
          />
          <BsChevronDoubleLeft className='btnPrev' onClick={prevSlide} />
          <BsChevronDoubleRight className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={gallery[slideNumber].image} alt='' />
          </div>
        </div>
      )}
      <div className='galleryWrap'>
        {' '}
        {gallery &&
          gallery.map((slide, index) => {
            return (
              <div
                className='single'
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.image} alt='' />
              </div>
            )
          })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .galleryWrap {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: center;
    max-width: var(--max-width);
    margin: 5rem auto;
  }

  .galleryWrap .single {
    width: 400px;
    cursor: pointer;
  }

  .galleryWrap .single img {
    width: 100%;
    height: 500px;
  }

  .galleryWrap .single img:hover {
    transform: scale(1.02);
  }

  .sliderWrap {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sliderWrap .btnClose,
  .sliderWrap .btnPrev,
  .sliderWrap .btnNext {
    position: fixed;
    cursor: pointer;
    opacity: 0.6;
    color: #fff;
    z-index: 9999;
  }

  .btnNext:hover,
  .btnPrev:hover,
  .btnClose:hover {
    opacity: 1;
  }

  .sliderWrap .btnClose {
    top: 40px;
    right: 40px;
  }

  .sliderWrap .btnPrev {
    top: 50%;
    transform: translateY(-50%);
    left: 40px;
  }

  .sliderWrap .btnNext {
    top: 50%;
    transform: translateY(-50%);
    right: 40px;
  }

  .fullScreenImage {
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fullScreenImage img {
    max-width: 100%;
    max-height: 100%;
    pointer-events: none;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
  @media (min-width: 992px) {
    .galleryWrap {
      display: grid;
      gap: 5rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`
export default Gallery
