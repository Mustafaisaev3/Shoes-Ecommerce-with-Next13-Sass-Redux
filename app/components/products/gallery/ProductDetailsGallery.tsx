'use client'

import { useEffect, useRef, useState } from 'react'
import { BsChevronUp, BsChevronDown, BsHeart } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useUI } from '@/app/context/ui.context'
import HeartButton from '../../HeartButton'
import { SafeProduct, SafeUser } from '@/app/types'

const images = [
    'https://img.stadiumgoods.com/jordan-air-jordan-1-retro-high-og-unc-toe_19856413_45845000_2048.jpg',
    'https://img.stadiumgoods.com/jordan-air-jordan-1-retro-high-og-unc-toe_19856413_45840904_2048.jpg',
    'https://img.stadiumgoods.com/jordan-air-jordan-1-retro-high-og-unc-toe_19856413_45845003_2048.jpg',
    'https://img.stadiumgoods.com/jordan-air-jordan-1-retro-high-og-unc-toe_19856413_45845004_2048.jpg',
    // 'https://img.stadiumgoods.com/adidas-yeezy-yeezy-slide-bone-2022_18909670_45628666_2048.jpg',
    // 'https://img.stadiumgoods.com/adidas-yeezy-yeezy-slide-bone-2022_18909670_45628661_2048.jpg',
    // 'https://img.stadiumgoods.com/adidas-yeezy-yeezy-slide-bone-2022_18909670_45631814_2048.jpg',
    // 'https://img.stadiumgoods.com/adidas-yeezy-yeezy-slide-bone-2022_18909670_45628653_2048.jpg',
]

type ProductDetailsGalleryTypes = {
  product: SafeProduct,
  currentUser: SafeUser | null
}

const ProductDetailsGallery: React.FC<ProductDetailsGalleryTypes> = ({ product, currentUser }) => {
  const { images, id } = product
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [activeImage, setActiveImage] = useState<string>(images[activeIndex])
  const { openProductImgZoomModal, setProductImgZoomData } = useUI()

  const imagesLength = images.length - 1

  const imagesSliderContainer = useRef<null | HTMLDivElement>(null)
  const imageHeight = useRef<null | HTMLDivElement>(null)

  const onImageSelect = (imgIndex: number) => {
    setActiveIndex(imgIndex)
  }

  const scrollFunction = (type: string) => {
    if (type === 'prev') {
        imagesSliderContainer.current!.scrollTop -= imageHeight.current!.clientHeight + 20
    } else if (type === 'next') {
        imagesSliderContainer.current!.scrollTop += imageHeight.current!.clientHeight + 20
    }

  }

  const handleOpenProductImgZoomModal = () => {
    setProductImgZoomData(images)
    return openProductImgZoomModal()
  }

  useEffect(() => {
    setActiveImage(images[activeIndex])
  }, [activeIndex])

  return (
    <div className='product-details__gallery gallery'>
        <div className='gallery-slider__wrapper'>
            <div className="gallery-slider__inner">
                <div className='gallery-slider__btn-prev' onClick={() => scrollFunction('prev')}>
                    <BsChevronUp size={24} />
                </div>
                <div className='gallery-slider__images' ref={imagesSliderContainer}>
                    {images.map((img: string, index: any) => {
                        return (
                            <div ref={imageHeight} onClick={() => onImageSelect(index)}>
                                <img className={img === activeImage ? 'active' : ''} src={img} />
                            </div>
                        )
                    })}
                </div>
                <div className='gallery-slider__btn-next' onClick={() => scrollFunction('next')}>
                    <BsChevronDown size={24} />
                </div>
            </div>
        </div>
        <div className='gallery__image-wrapper'>
            <motion.img 
              key={activeImage} 
              initial={{opacity: 0, x: -50}} 
              animate={{opacity: 1, x: 0}} 
              src={activeImage} 
              alt="shoe-img"
              onClick={handleOpenProductImgZoomModal}  
            />
            <div className='gallery__like-icon' >
                <HeartButton currentUser={currentUser} productId={id} size={25} />
            </div>
        </div>
    </div>
  )
}

export default ProductDetailsGallery