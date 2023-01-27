import React, { useState, useEffect } from 'react'
import img1 from "../assets/review.jpeg"
import styled from 'styled-components'
import data from './../dataReviews'

const Reviews = () => {
  const [review, setReview] = useState(data)

  const [index, setIndex] = useState(0)
  useEffect(() => {
    const lastIndex = review.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, review])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])
  return (
    <>
      <Wrapper>
        <section className='section'>
          <img src={img1} alt='' />
          <div className='reviews'>
            <div className='title'>
              <h2>
                <span>/</span>Commentaires des clients
              </h2>
            </div>
            <div className='section-center'>
              {review.map((person, personIndex) => {
                const { id, name, desc } = person

                let position = 'nextSlide'
                if (personIndex === index) {
                  position = 'activeSlide'
                }
                if (
                  personIndex === index - 1 ||
                  (index === 0 && personIndex === review.length - 1)
                ) {
                  position = 'lastSlide'
                }

                return (
                  <article className={position} key={id}>
                    <div className='review-info'>
                      <h4 className='info'>{name}</h4>

                      <p >{desc}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .section {
    position: relative;
  }
  .section img {
    width: 100%;
    height: 500px;
  }
  .reviews {
    position: absolute;
    background: #fff;
    top: 30%;
    left: 10%;
    margin-top: -5rem;
  }
  .review-info {
    margin-top: 5rem;
  }
  .review-info h4 {
    color: var(--clr-primary-1);
  }
  .review-info p{
    max-width:35rem;
    color:grey;
  } .section-center {
    margin: 0 auto;
    margin-top: 4rem;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
  }

  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: var(--transition);
  }
  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.lastSlide {
    transform: translateX(-100%);
  }
  article.nextSlide {
    transform: translateX(100%);
  }
`
export default Reviews
