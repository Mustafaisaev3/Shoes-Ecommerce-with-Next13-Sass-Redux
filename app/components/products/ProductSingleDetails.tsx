'use client'

import { Product } from "@prisma/client"
import ProductDetailsGallery from "./gallery/ProductDetailsGallery"
import ProductOptions from "./options/ProductOptions"
import { SafeProduct, SafeUser, SliderWithProducts } from "@/app/types"
import RelatedProductsSlider from "../sliders/RelatedProductsSlider"
import ProductGallerySlider from "./gallery/ProductGallerySlider"

type ProductSingleDetails = {
    product: SafeProduct | null,
    currentUser: SafeUser | null,
    relatedProducts: SliderWithProducts
}

const ProductSingleDetails: React.FC<ProductSingleDetails> = ({ product, currentUser, relatedProducts }) => {
  console.log(product)
  return (
    <>
        {product ? (
            <div className="product-details">
                <div className="product-details__inner">
                    <div className="product-details__top">
                        <div className="product-details__left">
                            <ProductDetailsGallery currentUser={currentUser} product={product} />
                            <ProductGallerySlider currentUser={currentUser} product={product} />
                            <div className="product-details__description">
                                <div className="product-details__description-title">PRODUCT DETAILS</div>
                                <p className="product-details__description-content">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                        <ProductOptions product={product}/>
                    </div>
                    <div className="product-details__bottom">
                        
                        <div className="product-details__properties properties">
                            <ul className="properties__list">
                                <li className="properties__list-item">
                                    <div>MANUFACTURED SKU</div>
                                    <p>{product.properties.manufactured_sku}</p>
                                </li>
                                <li className="properties__list-item">
                                    <div>BRAND</div>
                                    <p>{product.properties.brand}</p>
                                </li>
                                <li className="properties__list-item">
                                    <div>NICKNAME</div>
                                    <p>{product.properties.nickname}</p>
                                </li>
                                <li className="properties__list-item">
                                    <div>COLORWAY</div>
                                    <p>{product.properties.colorway}</p>
                                </li>
                                <li className="properties__list-item">
                                    <div>GENDER</div>
                                    <p>{product.properties.gender}</p>
                                </li>
                                <li className="properties__list-item">
                                    <div>RELEASE DATE</div>
                                    <p>{product.properties.release_date}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <RelatedProductsSlider currentUser={currentUser} relatedProducts={relatedProducts} />
                </div>
            </div>
        ) : null}
    </>
  )
}

export default ProductSingleDetails