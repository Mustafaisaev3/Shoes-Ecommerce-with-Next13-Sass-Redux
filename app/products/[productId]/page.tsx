import React from 'react'
import getProductById from '@/app/actions/getProductById';
import ProductSingleDetails from '@/app/components/products/ProductSingleDetails'
import getCurrentUser from '@/app/actions/getCurrentUser';
import { SafeProduct } from '@/app/types';
import getRelatedProducts from '@/app/actions/sliders/getRelatedProducts';

interface IParams {
  productId?: string;
}


const page = async ({ params }: { params: IParams }) => {
  const product = await getProductById(params);
  const relatedProducts = await getRelatedProducts()
  const currentUser = await getCurrentUser();

  return (
    <div className='product-page'>
        <div className="container">
            <div className="product-page__inner">
              {/* @ts-ignore */}
                <ProductSingleDetails currentUser={currentUser} product={product as SafeProduct} relatedProducts={relatedProducts} />
            </div>
        </div>
    </div>
  )
}

export default page