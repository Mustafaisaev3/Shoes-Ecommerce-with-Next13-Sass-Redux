'use client'

import { Product } from "@prisma/client"
import ProductCard from "./ProductCard"

interface ProductGridProps {
  products: Product[]
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {

  return (
    <div className="product-grid">
      {products.map((product: any) => {
        return (
          <ProductCard product={product} width={'100%'} />
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