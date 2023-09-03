'use client'
import Image from 'next/image'
import { HiStar } from 'react-icons/hi'
import { HiShoppingBag } from 'react-icons/hi'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Button from '../UI/Button';
import { useState } from 'react'
import Loader from '../Loader'
import { Product } from '@prisma/client'
import HeartButton from '../HeartButton'
import { SafeUser } from '@/app/types'
import { useUI } from '@/app/context/ui.context'
import toast from 'react-hot-toast'
import { useCart } from '@/app/context/Cart/cart.context'

interface ProductCardProps {
    product: Product;
    width?: string,
    height?: string,
    currentUser?: SafeUser | null
  };  

const ProductCard: React.FC<ProductCardProps> = ({product, currentUser, width, height}) => {

  const { openDrawer } = useUI()
  const { addItemToCart } = useCart()

  const handleAddItemToCart = () => {
    addItemToCart(product)
    toast.success('Added to cart!')
    openDrawer()
  }

  return (
    <div 
      className="product-card" 
      style={{width: width ? width : '230px', height: height ? height : '350px'}}
    >
      <div className="product-card__top">
        <img
          className="product-card__image"
          src={product.images[0]}
          alt="Product"
        />
        <HeartButton currentUser={currentUser} productId={product.id} size={25} />
      </div>
      <div className="product-card__bottom">
        <div className='product-card__title'><a href={`/products/${product.id}`}>{product.name}</a></div>
        <div className='product-card__rate'><HiStar size={20} color="#f1b44c" />
          <span style={{fontSize: '20px', fontWeight: 'bold', color: 'black', paddingLeft: '7px', paddingRight: '5px'}}>{product.rating}</span> /(169 reviews)
        </div>
        <div className='product-card__actions'>
          <div className='product-card__price'>
            {product.salePrice ? (
              <>
                <span className='product-card__price-old'>${product.price}</span>
                <span className='product-card__price-main'>${product.salePrice}</span>
              </>
            ) : (
              <>
                <span className='product-card__price-main'>${product.price}</span>
              </>
            )}
          </div>
          <div className='product-card__btn'>
            <Button icon={HiShoppingBag} size='sm' onClick={handleAddItemToCart} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard