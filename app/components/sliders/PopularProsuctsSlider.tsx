import { SafeUser, SliderWithProducts } from '@/app/types'
import { Slider, User } from '@prisma/client'
import React from 'react'
import ProductSlider from '../products/ProductSlider'

type PopularProsuctsSliderTypes = {
  popularProducts: SliderWithProducts,
  currentUser: SafeUser | null
}

const PopularProsuctsSlider: React.FC<PopularProsuctsSliderTypes> = ({ popularProducts, currentUser }) => {
  const title = popularProducts.title.split(' ')

  return (
    <ProductSlider currentUser={currentUser} products={popularProducts} headingSetting={{title: title[0], spanword: title[1], align: 'left', link: popularProducts.link!, linkTitle: 'Show more' }} />
  )
}

export default PopularProsuctsSlider