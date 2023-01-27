import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'accueil',
    url: '/',
  },
  {
    id: 2,
    text: 'á propos de moi',
    url: '/about',
  },

  {
    id: 3,
    text: 'contact',
    url: '/contact',
  },
]


export const products_url = '/.netlify/functions/products'

export const single_product_url = `/.netlify/functions/single-product?id=`
