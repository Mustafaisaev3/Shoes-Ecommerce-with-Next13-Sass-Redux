'use client'

import { SafeProduct } from "@/app/types"
import ProductCard from "../../products/ProductCard"

type FavoritesTypes = {
    favoriteProducts: SafeProduct[] | null
}

const Favorites: React.FC<FavoritesTypes> = ({ favoriteProducts }) => {
  return (
    <div className="favorites">
        <h2 className="title">Favorites</h2>
        <div className="favorites-grid">
            {favoriteProducts ? favoriteProducts.map((product: SafeProduct) => <ProductCard product={product} width={'100%'}/>) : null}
            {/* <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem /> */}
        </div>
    </div>
  )
}

export default Favorites