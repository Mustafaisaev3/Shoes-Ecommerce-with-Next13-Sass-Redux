'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { HeroSliderData } from "@/data/HeroSliderData"

import '@/app/styles/swiper/swiper-min.css'
import Button from '../UI/Button';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const HeroMobileSlider = () => {
  return (
    <div className='hero-mobile__slider'>
      <Swiper
        // @ts-ignore
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {HeroSliderData.map((item) => {
          return (
            <SwiperSlide>
              <div className='hero-mobile__slider-item'>
                <div className='hero-mobile__slider-item-content'>
                  <h2>{item.title.first} <br/> {item.title.second}</h2>
                  <Button title="Add to Bag" className="btn-primary" />
                </div>
                <div className='hero-mobile__slider-item-img'>
                  <img src={item.img} alt="" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default HeroMobileSlider