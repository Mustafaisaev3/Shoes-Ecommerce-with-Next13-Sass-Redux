'use client'

import SaleProsuctsSlider from "../sliders/SaleProsuctsSlider"
import ProductDetailsGallery from "./gallery/ProductDetailsGallery"
import ProductOptions from "./options/ProductOptions"

const ProductSingleDetails = () => {
  return (
    <div className="product-details">
        <div className="product-details__inner">
            <div className="product-details__top">
                <div className="product-details__left">
                    <ProductDetailsGallery />
                    <div className="product-details__description">
                        <div className="product-details__description-title">PRODUCT DETAILS</div>
                        <p className="product-details__description-content">
                            The adidas Yeezy 700 V3 “Azael” is the evolutionary third version of Kanye West’s chunky silhouette that combines vintage performance basketball aesthetics with lifestyle detailing. The Winter 2019 release finds a few noticeable differences from previous Yeezy 700 models and mirrors the futuristic vibes of the adidas Kobe 2’s upper with its newly incorporated bulky RPU overlay cages. This debut colorway of the Yeezy 700 V3 features a white engineered mesh base with the aforementioned cages contrasted by a black nylon tongue and tonal laces. A chunky white bone midsole is nearly double in size of prior Yeezy 700 models for a supportive feel and bold look. Light blue traction pods protect the blue-accented cushioning encapsulated within the sole. Release date: December 23, 2019.
                        </p>
                    </div>
                </div>
                <ProductOptions />
            </div>
            <div className="product-details__bottom">
                
                <div className="product-details__properties properties">
                    <ul className="properties__list">
                        <li className="properties__list-item">
                            <div>MANUFACTURED SKU</div>
                            <p>DZ5485 400</p>
                        </li>
                        <li className="properties__list-item">
                            <div>BRAND</div>
                            <p>Jordan</p>
                        </li>
                        <li className="properties__list-item">
                            <div>NICKNAME</div>
                            <p>UNC Toi</p>
                        </li>
                        <li className="properties__list-item">
                            <div>COLORWAY</div>
                            <p>University Blue/Black-White</p>
                        </li>
                        <li className="properties__list-item">
                            <div>GENDER</div>
                            <p>Mens</p>
                        </li>
                        <li className="properties__list-item">
                            <div>RELEASE DATE</div>
                            <p>July 8, 2023</p>
                        </li>
                    </ul>
                </div>
            </div>
            <SaleProsuctsSlider />
        </div>
    </div>
  )
}

export default ProductSingleDetails