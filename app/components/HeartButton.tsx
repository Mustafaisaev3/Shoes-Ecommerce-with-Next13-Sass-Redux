'use client'

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { SafeUser } from "../types"
import useFavorite from '../hooks/useFavorite'

interface HeartButtonProps {
    productId: string,
    currentUser?: SafeUser | null,
    size: number
}

const HeartButton: React.FC<HeartButtonProps> = ({ productId, currentUser, size = 22 }) => {

  const { hasFavorited, toggleFavorite } = useFavorite({productId, currentUser})
  
    return (
    <div onClick={toggleFavorite}>
        {hasFavorited ? (
          <AiFillHeart size={size} className='product-card__heart' />
        ) : (
          <AiOutlineHeart size={size} className='product-card__heart' />
        )}
    </div>
  )
}

export default HeartButton