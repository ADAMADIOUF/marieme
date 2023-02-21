import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import styled from 'styled-components'
const ProgreBar = () => {
  const [count, setCount] = useState(false)
  return (
    <Wrapper>
      <section className='section-center progress-content'>
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}
        >
          <div className='progress-bar'>
            <div className='progress'>
              <h1>
                {count && <CountUp start={0} end={2} duration={2} delay={0} />}+
              </h1>
              <span>Des années d'expérience</span>
            </div>
            <div className='progress'>
              <h1>
                {count && (
                  <CountUp start={0} end={320} duration={2} delay={0} />
                )}
                +
              </h1>
              <span>des clients satisfaits</span>
            </div>
            <div className='progress'>
              <h1>
                {count && (
                  <CountUp start={0} end={720} duration={2} delay={0} />
                )}
                +
              </h1>
              <span>produits vendus</span>
            </div>
          </div>
          <div className='progress-bar-2'></div>
        </ScrollTrigger>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .progress{
    color:var(--clr-primary-1)
  } @media (min-width: 992px) {
    .progress-bar {
      display: grid;
      gap: 5rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
export default ProgreBar
