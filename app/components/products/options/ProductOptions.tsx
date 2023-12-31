'use client'

import { useState } from 'react'
import Accordion from '../../UI/Accordion'
import ModalDropdown from '../../UI/ModalDropdown'
import Button from '../../UI/Button'
import Tab from '../../UI/Tab'

import { MdGppGood, MdAssignmentReturn } from 'react-icons/md'
import { FaTruck } from 'react-icons/fa'

import { SafeProduct } from '@/app/types'
import ProductColors from '@/data/product-colors'
import { useCart } from '@/app/context/Cart/cart.context'
import { useUI } from '@/app/context/ui.context'
import toast from 'react-hot-toast'

const accItems = [
  {
    title: 'Authenticity Guaranteed', 
    content: 'Authenticity is the foundation of our business, and every item we sell is inspected by our expert team. Our authenticators are the most experienced and highly trained in the business. In addition, we source our products only from trusted suppliers',
    icon: MdGppGood,
  },
  {
    title: 'In Stock & Ready to ship', 
    content: 'We hold and authenticate inventory on site so you don’t have to wait to receive product from a 3rd party seller. Processing and order verification typically occur 1-3 business days prior to shipping.',
    icon: FaTruck,
  },
  {
    title: 'Returns Accepted', 
    content: 'We offer free global returns for all eligible and full-priced items. Final sale items will be noted on the product page.  Please see return policy for further details!',
    icon: MdAssignmentReturn,
  },
]

type ProductOptionsTypes = {
  product: SafeProduct
}

const ProductOptions: React.FC<ProductOptionsTypes> = ({ product }) => {
  const [size, setSize] = useState<null | string>(null)
  const [color, setColor] = useState<null | {value: string, hex: string}>(null)

  const { addItemToCart, items } = useCart()
  const { openDrawer } = useUI()

  const handleAddItemToCart = () => {
    const productWithProperties: SafeProduct = {
      ...product,
      options: [size!, color?.value!],
      ID: `${Math.random() * 100}`
    }
    addItemToCart(productWithProperties)
    toast.success('Added to cart!')
    openDrawer()
  }


  return (
    <div className='product-options__wrapper'>
      <div className='product-brand'>{product.category}</div>
      <div className="product-name">
        <h2>{product.name}</h2>
      </div>
      <div className="product-price">
        {product.salePrice ? (
          <>
            <span className='old-price'>{product.price} $</span>
            <span>{product.salePrice} $</span>
          </>
        ) : (
          <span>{product.price} $</span>
        )}

      </div>
      <div className="product-actions">
        <div className='product-actions__selects'>
          <div className='size'>
            <ModalDropdown title={'size'} activeValue={size} setValue={setSize} disable={product.size.length ? false : true}>
              <div className='size-container'>
                {product.size.map((productSize: string) => {
                  return <Tab active={true ? size == productSize : false} label={productSize} value={productSize} height={50} width={70} onClick={setSize} />

                })}
              </div>
            </ModalDropdown>
          </div>
          <div className='color'>
            <ModalDropdown title={'color'} activeValue={color} setValue={setColor} color={color?.hex} disable={product.color.length ? false : true}>
              <div className='color-container'>
                {product.color.map((productColor: any) => {
                  return <Tab active={true ? color?.hex == ProductColors[productColor].value : false} value={ProductColors[productColor].value} colored height={50} width={70} onClick={setColor} />

                })}
              </div>
            </ModalDropdown>
          </div>
        </div>
        <div className='product-actions__submit'>
          <Button 
            className='btn-main' 
            title='Add to Cart' 
            width='100%' 
            onClick={handleAddItemToCart} 
            disabled={(!size || !color) && true} 
          />
        </div>
      </div>
      <div className='product-details_mobile'>
        <div className="product-details__description">
          <div className="product-details__description-title">PRODUCT DETAILS</div>
          <p className="product-details__description-content">
            {product.description}
          </p>
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
      </div>
      <Accordion items={accItems} />
    </div>
  )
}

export default ProductOptions