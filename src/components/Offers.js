import React from 'react';
import { useEffect } from 'react';

const Offers = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  const offers = [
    {
      id: 1,
      title: `Soldes d'été`,
      description: `Profitez de jusqu'à 50% de réduction sur une sélection de parfums !`,
      image: `./images/a1.jpeg`,
    },
    {
      id: 2,
      title: 'Livraison gratuite',
      description:
        'Bénéficiez de la livraison gratuite pour toute commande supérieure à 50 $ !',
      image: './images/a2.jpeg',
    },
    // Ajoutez d'autres offres ici
  ]

  return (
    <div className='offers'>
      <div className='offers-container section-center'>
        {offers.map((offer) => (
          <div key={offer.id} className='offer-item'>
            <img src={offer.image} alt={offer.title} className='offer-image' />
            <div className='offer-content'>
              <h3 className='offer-title'>{offer.title}</h3>
              <p className='offer-description'>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;