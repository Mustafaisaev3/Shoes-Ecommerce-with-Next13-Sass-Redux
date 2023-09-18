'use client'

import React from 'react'
import { Product, Slider } from '@prisma/client';
import Heading from '../UI/Heading'
import ProductCard from './ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { SafeUser, SliderWithProducts } from '@/app/types';

import 'swiper/css';
import 'swiper/css/navigation';

interface ProductSliderInterface {
  products: SliderWithProducts,
  headingSetting: {
    title: string,
    spanword: string,
    align: 'left' | 'center' | 'right',
    link: string,
    linkTitle: string,
  },
  currentUser: SafeUser | null
}


const ProductSlider: React.FC<ProductSliderInterface> = ({products, currentUser, headingSetting: { title, spanword, align, link, linkTitle }}) => {

  return (
    <div className='product-slider'>
      <div className="container">
        <div className="product-slider__inner">
          <Heading title={title} spanword={spanword} align={align} link={{link, text: linkTitle}} />
          <div className="product-slider__container">
            <Swiper
              // @ts-ignore
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={30}
              slidesPerView={4}
              navigation
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1279: {
                  slidesPerView: 4,
                },
              }}
            >
              {products.products.map((product: Product) => {
                return (
                  <SwiperSlide>
                    <ProductCard currentUser={currentUser} product={product} width={'100%'} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSlider