'use client'

import { SafeUser } from "@/app/types"
import { Product } from "@prisma/client"
import ProductCard from "./ProductCard"

interface ProductGridProps {
  products: Product[]
  currentUser: SafeUser | null
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, currentUser }) => {

  return (
    <div className="product-grid">
      {products.map((product: any) => {
        return (
          <ProductCard currentUser={currentUser} product={product} width={'100%'} />
        )
      })}
        {/* <ProductCard data={'hello'} width={'100%'} />
        <ProductCard data={'hello'} width={'100%'} />
        <ProductCard data={'hello'} width={'100%'} />
        <ProductCard data={'hello'} width={'100%'} />
        <ProductCard data={'hello'} width={'100%'} />
        <ProductCard data={'hello'} width={'100%'} />
        <ProductCard data={'hello'} width={'100%'} />
        <ProductCard data={'hello'} width={'100%'} />
        <ProductCard data={'hello'} width={'100%'} />
        <ProductCard data={'hello'} width={'100%'} />
        <ProductCard data={'hello'} width={'100%'} />
        <ProductCard data={'hello'} width={'100%'} />
        <ProductCard data={'hello'} width={'100%'} />
        <ProductCard data={'hello'} width={'100%'} />
        <ProductCard data={'hello'} width={'100%'} />
        <ProductCard data={'hello'} width={'100%'} /> */}
    </div>
  )
}

export default ProductGrid