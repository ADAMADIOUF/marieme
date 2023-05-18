import React from 'react'
import perfumeImage from '../assets/sall.jpg'
import { useEffect } from 'react'

const About = () => {
 useEffect(() => {
   window.scrollTo(0, 0)
 })
  return (
    <div className='about-content section-center'>
      <h2>À propos de nous</h2>

      <div className='about'>
        <img src={perfumeImage} alt='Parfum' />
        <p>
          Bienvenue sur notre site dédié à l'univers enchanteur des parfums.
          Chez nous, nous croyons que les parfums sont bien plus que de simples
          fragrances, ce sont des expressions personnelles de l'élégance, de la
          confiance et de la beauté. Nous sommes passionnés par l'art de la
          parfumerie et nous avons rassemblé une collection soigneusement
          sélectionnée de parfums de haute qualité provenant des marques les
          plus renommées dans le domaine. Chaque parfum que nous proposons est
          une œuvre d'art olfactive, créée avec soin et attention aux détails.
          Nous comprenons que chaque personne a des goûts et des préférences
          uniques en matière de parfum, c'est pourquoi nous offrons une large
          gamme de fragrances pour répondre à tous les styles et toutes les
          occasions. Que vous recherchiez un parfum doux et floral, un parfum
          boisé et sensuel, ou quelque chose d'audacieux et de captivant, nous
          avons ce qu'il vous faut. La qualité est notre priorité absolue. Nous
          travaillons en étroite collaboration avec les maisons de parfum les
          plus respectées pour vous offrir des produits authentiques, fabriqués
          avec les meilleurs ingrédients et selon des normes rigoureuses. Chaque
          bouteille de parfum que vous recevez de notre part est garantie d'être
          originale et de la plus haute qualité. Nous croyons également en une
          expérience client exceptionnelle. Notre équipe dévouée est là pour
          vous guider dans votre choix de parfum et répondre à toutes vos
          questions. Nous offrons une livraison rapide et sécurisée, afin que
          vous puissiez profiter de votre nouveau parfum préféré le plus tôt
          possible. Explorez notre site et découvrez l'art de la parfumerie à
          travers notre collection exquise de parfums. Laissez-vous emporter par
          les arômes envoûtants et trouvez le parfum qui vous correspond le
          mieux. Nous sommes ravis de vous accompagner dans votre voyage
          olfactif et de vous aider à créer des souvenirs parfumés durables.
        </p>
      </div>
    </div>
  )
}

export default About
