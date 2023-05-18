import React from 'react'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h4>À Propos De Nous</h4>
          <p>
            Bienvenue sur notre site dédié à l'univers enchanteur des parfums.
            Chez nous, nous croyons que les parfums sont bien plus que de
            simples fragrances, ce sont des expressions personnelles de
            l'élégance, de la confiance et de la beauté.
          </p>
        </div>
        <div className='footer-section'>
          <h4>Contactez Nous</h4>
          <p>
            Address: Senegal,Fk,Ndouck
            <br />
            Email: remsclamour@gmail.com
            <br />
            Phone:221775489633
          </p>
        </div>
        <div className='footer-section'>
          <h4>Suivez-nous</h4>

          <div className='social-icons'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebookF />
            </a>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram />
            </a>
            <a
              href='https://www.twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>
          &copy; {new Date().getFullYear()} adamadiouf2017@gmail.com. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
