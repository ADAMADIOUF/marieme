import React from 'react'
import { Link } from 'react-router-dom'

const DealsTwo = () => {
  return (
    <section className='section-center'>
      <div className='deals-one'>
        <div className='deals-one-container'>
          <article>
            <h3>20% de réduction</h3>
          </article>
          <article>
            <p>
              Notre parfum floral délicat capture la beauté intemporelle des
              fleurs
            </p>
          </article>
          <article>
            <Link to={`/brands`}>
              {' '}
              <button class='explore-button'>Marques</button>
            </Link>
            <div class='line'></div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default DealsTwo
