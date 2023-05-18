import React from 'react'
import { Link } from 'react-router-dom'

const DealsOne = () => {
  return (
    <section className='section-center'>
      <div className='deals-one'>
        <div className='deals-one-container'>
          <article>
            <h3>parfum de class</h3>
          </article>
          <article>
            <p>Exprimez votre individualité avec notre parfum unique</p>
          </article>
          <article>
            <Link to={`/brands`}>
              <button class='explore-button'>Marques</button>
            </Link>
            <div class='line'></div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default DealsOne