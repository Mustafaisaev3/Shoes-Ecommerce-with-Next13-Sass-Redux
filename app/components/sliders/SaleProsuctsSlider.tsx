import { SafeUser, SliderWithProducts } from '@/app/types'
import { User } from '@prisma/client'
import React from 'react'
import ProductSlider from '../products/ProductSlider'

type SaleProsuctsSliderTypes = {
  saleProducts: SliderWithProducts
  currentUser: SafeUser | null
}

const SaleProsuctsSlider: React.FC<SaleProsuctsSliderTypes> = ({ saleProducts, currentUser }) => {
  const title = saleProducts.title.split(' ')

  return (
    <ProductSlider currentUser={currentUser} products={saleProducts} headingSetting={{title: title[0], spanword: title[1], align: 'right', link: saleProducts.link!, linkTitle: 'Show more' }} />
  )
}

export default SaleProsuctsSlider