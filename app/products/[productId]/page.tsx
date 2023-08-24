import React from 'react'
import getProductById from '@/app/actions/getProductById';
import ProductSingleDetails from '@/app/components/products/ProductSingleDetails'
import { SafeProduct } from '@/app/types';

interface IParams {
  productId?: string;
}


const page = async ({ params }: { params: IParams }) => {
  const product = await getProductById(params);

  return (
    <div className='product-page'>
        <div className="container">
            <div className="product-page__inner">
                <ProductSingleDetails product={product as SafeProduct} />
            </div>
        </div>
    </div>
  )
}

export default page