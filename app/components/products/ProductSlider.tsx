'use client'

import React from 'react'
import Heading from '../UI/Heading'
import ProductCard from './ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

interface ProductSliderInterface {
  headingSetting: {
    title: string,
    spanword: string,
    align: 'left' | 'center' | 'right',
    link: string,
    linkTitle: string,
  }
}


const ProductSlider: React.FC<ProductSliderInterface> = ({headingSetting: { title, spanword, align, link, linkTitle }}) => {
  return (
    <div className='product-slider'>
      <div className="container">
        <div className="product-slider__inner">
          <Heading title={title} spanword={spanword} align={align} link={{link, text: linkTitle}} />
          <div className="product-slider__container">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={30}
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <ProductCard data={{
                  id: 3,
                  title: {
                      first: 'Nike Roshe ',
                      second: 'Run 2019',
                  },
                  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime consequuntur necessitatibus, ipsum distinctio ad eum corporis tempore totam recusandae consequatur aspernatur blanditiis facere reprehenderit nam consectetur a rerum vitae? Natus maxime consequuntur necessitatibus, ipsum distinctio ad eum corporis tempore totam recusandae consequatur aspernatur blanditiis facere reprehenderit nam consectetur a rerum vitae?',
                  price: '10,899.99',
                  img: '/images/HeroSlider/air3.png'
                }} width={'100%'} />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard data={{
                  id: 3,
                  title: {
                      first: 'Nike Roshe ',
                      second: 'Run 2019',
                  },
                  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime consequuntur necessitatibus, ipsum distinctio ad eum corporis tempore totam recusandae consequatur aspernatur blanditiis facere reprehenderit nam consectetur a rerum vitae? Natus maxime consequuntur necessitatibus, ipsum distinctio ad eum corporis tempore totam recusandae consequatur aspernatur blanditiis facere reprehenderit nam consectetur a rerum vitae?',
                  price: '10,899.99',
                  img: '/images/HeroSlider/air3.png'
                }} width={'100%'} />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard data={{
                  id: 3,
                  title: {
                      first: 'Nike Roshe ',
                      second: 'Run 2019',
                  },
                  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime consequuntur necessitatibus, ipsum distinctio ad eum corporis tempore totam recusandae consequatur aspernatur blanditiis facere reprehenderit nam consectetur a rerum vitae? Natus maxime consequuntur necessitatibus, ipsum distinctio ad eum corporis tempore totam recusandae consequatur aspernatur blanditiis facere reprehenderit nam consectetur a rerum vitae?',
                  price: '10,899.99',
                  img: '/images/HeroSlider/air3.png'
                }} width={'100%'} />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard data={{
                  id: 3,
                  title: {
                      first: 'Nike Roshe ',
                      second: 'Run 2019',
                  },
                  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime consequuntur necessitatibus, ipsum distinctio ad eum corporis tempore totam recusandae consequatur aspernatur blanditiis facere reprehenderit nam consectetur a rerum vitae? Natus maxime consequuntur necessitatibus, ipsum distinctio ad eum corporis tempore totam recusandae consequatur aspernatur blanditiis facere reprehenderit nam consectetur a rerum vitae?',
                  price: '10,899.99',
                  img: '/images/HeroSlider/air3.png'
                }} width={'100%'} />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard data={{
                  id: 3,
                  title: {
                      first: 'Nike Roshe ',
                      second: 'Run 2019',
                  },
                  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime consequuntur necessitatibus, ipsum distinctio ad eum corporis tempore totam recusandae consequatur aspernatur blanditiis facere reprehenderit nam consectetur a rerum vitae? Natus maxime consequuntur necessitatibus, ipsum distinctio ad eum corporis tempore totam recusandae consequatur aspernatur blanditiis facere reprehenderit nam consectetur a rerum vitae?',
                  price: '10,899.99',
                  img: '/images/HeroSlider/air3.png'
                }} width={'100%'} />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard data={{
                  id: 3,
                  title: {
                      first: 'Nike Roshe ',
                      second: 'Run 2019',
                  },
                  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime consequuntur necessitatibus, ipsum distinctio ad eum corporis tempore totam recusandae consequatur aspernatur blanditiis facere reprehenderit nam consectetur a rerum vitae? Natus maxime consequuntur necessitatibus, ipsum distinctio ad eum corporis tempore totam recusandae consequatur aspernatur blanditiis facere reprehenderit nam consectetur a rerum vitae?',
                  price: '10,899.99',
                  img: '/images/HeroSlider/air3.png'
                }} width={'100%'} />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard data={{
                  id: 3,
                  title: {
                      first: 'Nike Roshe ',
                      second: 'Run 2019',
                  },
                  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime consequuntur necessitatibus, ipsum distinctio ad eum corporis tempore totam recusandae consequatur aspernatur blanditiis facere reprehenderit nam consectetur a rerum vitae? Natus maxime consequuntur necessitatibus, ipsum distinctio ad eum corporis tempore totam recusandae consequatur aspernatur blanditiis facere reprehenderit nam consectetur a rerum vitae?',
                  price: '10,899.99',
                  img: '/images/HeroSlider/air3.png'
                }} width={'100%'} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSlider