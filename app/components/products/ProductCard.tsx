'use client'
import Image from 'next/image'
import { HiStar } from 'react-icons/hi'
import { HiShoppingBag } from 'react-icons/hi'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Button from '../UI/Button';
import { useState } from 'react'
import Loader from '../Loader'
import { Product } from '@prisma/client'

interface ProductCardProps {
    product: Product;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    width?: string,
    height?: string,
    // currentUser?: SafeUser | null
  };

  

const ProductCard: React.FC<ProductCardProps> = ({product ,onAction ,disabled ,actionLabel ,actionId ,width ,height}) => {
  const [like, setLike] = useState(false)

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
        {like ? (
          <AiFillHeart size={22} className='product-card__heart' onClick={() => setLike(false)} />
        ) : (
          <AiOutlineHeart size={22} className='product-card__heart' onClick={() => setLike(true)} />
        )}
      </div>
      <div className="product-card__bottom">
        <div className='product-card__title'><a href={`/products/${product.id}`}>{product.name}</a></div>
        <div className='product-card__rate'><HiStar size={20} color="#f1b44c" />(169 reviews)</div>
        <div className='product-card__actions'>
          <div className='product-card__price'>
            <span className='product-card__price-old'>${product.price}</span>
            <span className='product-card__price-main'>${product.salePrice}</span>
          </div>
          <div className='product-card__btn'>
            <Button icon={HiShoppingBag} size='sm' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard