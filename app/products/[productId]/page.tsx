import ProductSingleDetails from '@/app/components/products/ProductSingleDetails'
import React from 'react'

const page = () => {
  return (
    <div className='product-page'>
        <div className="container">
            <div className="product-page__inner">
                <ProductSingleDetails />

            </div>
        </div>
    </div>
  )
}

export default page