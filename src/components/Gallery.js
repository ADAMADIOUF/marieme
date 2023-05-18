import React, { useState } from 'react'
import gallery from './../../src/imgGallery'

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
    <>
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
    </>
  )
}

export default Gallery
