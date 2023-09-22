'use client'

import { SafeProduct, SafeUser } from '@/app/types'
import HeartButton from '@/app/components/HeartButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { useUI } from '@/app/context/ui.context';

import '@/app/styles/swiper/swiper-min.css'

type ProductGallerySliderTypes = {
    product: SafeProduct,
    currentUser: SafeUser | null
}

const ProductGallerySlider: React.FC<ProductGallerySliderTypes> = ({ product, currentUser }) => {
  const { openProductImgZoomModal, setProductImgZoomData } = useUI()
    
  const handleOpenProductImgZoomModal = () => {
    setProductImgZoomData(product.images)
    return openProductImgZoomModal()
  }

  return (
    <div className='product-gallary-slider'>
      <Swiper
        // @ts-ignore
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {product.images.map((item) => {
          return (
            <SwiperSlide>
              <div className='product-gallary-slider__item' onClick={handleOpenProductImgZoomModal}>
                <div className='product-gallary-slider__img'>
                  <img src={item} alt={item} />
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className='product-gallary-slider__like' >
        <HeartButton currentUser={currentUser} productId={product.id} size={25} />
      </div>
    </div>
  )
}
export default ProductGallerySlider