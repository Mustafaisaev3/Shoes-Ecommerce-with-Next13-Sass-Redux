import { SafeUser, SliderWithProducts } from '@/app/types'
import { User } from '@prisma/client'
import React from 'react'
import ProductSlider from '../products/ProductSlider'

type RelatedProductsSliderTypes = {
  relatedProducts: SliderWithProducts
  currentUser: SafeUser | null
}

const RelatedProductsSlider: React.FC<RelatedProductsSliderTypes> = ({ relatedProducts, currentUser }) => {
  const title = relatedProducts.title.split(' ')

  return (
    <ProductSlider currentUser={currentUser} products={relatedProducts} headingSetting={{title: title[0], spanword: title[1], align: 'right', link: relatedProducts.link!, linkTitle: 'Show more' }} />
  )
}

export default RelatedProductsSlider