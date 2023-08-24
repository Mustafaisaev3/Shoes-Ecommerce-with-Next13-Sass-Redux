'use client'

import { useState } from 'react'
import Accordion from '../../UI/Accordion'
import ModalDropdown from '../../UI/ModalDropdown'
import Tab from '../../UI/Tab'
import { MdGppGood, MdAssignmentReturn } from 'react-icons/md'
import { FaTruck } from 'react-icons/fa'
import Button from '../../UI/Button'
import axios from 'axios'
import { SafeProduct } from '@/app/types'

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
                {/* <Tab active={true ? size == 'S' : false} label='S' value='S' height={50} width={70} onClick={setSize} />
                <Tab active={true ? size == 'M' : false} label='M' value='M' height={50} width={70} onClick={setSize} />
                <Tab active={true ? size == 'L' : false} label='L' value='L' height={50} width={70} onClick={setSize} />
                <Tab active={true ? size == 'XL' : false} label='XL' value='XL' height={50} width={70} onClick={setSize} />
                <Tab active={true ? size == 'XXL' : false} label='XXL' value='XXL' height={50} width={70} onClick={setSize} /> */}
              </div>
            </ModalDropdown>
          </div>
          <div className='color'>
            <ModalDropdown title={'color'} activeValue={color} setValue={setColor} color={color?.hex} disable={product.color.length ? false : true}>
              <div className='color-container'>
                {product.color.map((productColor: any) => {
                  return <Tab active={true ? color?.hex == productColor.value : false} value={productColor} colored height={50} width={70} onClick={setColor} />

                })}
                {/* <Tab active={true ? color?.hex == 'red' : false} value={{value: 'red', hex: 'red'}} colored height={50} width={70} onClick={setColor} />
                <Tab active={true ? color?.hex == 'green' : false} value={{value: 'green', hex: 'green'}} colored height={50} width={70} onClick={setColor} />
                <Tab active={true ? color?.hex == 'blue' : false} value={{value: 'blue', hex: 'blue'}} colored height={50} width={70} onClick={setColor} />
                <Tab active={true ? color?.hex == 'gray' : false} value={{value: 'gray', hex: 'gray'}} colored height={50} width={70} onClick={setColor} />
                <Tab active={true ? color?.hex == 'orange' : false} value={{value: 'orange', hex: 'orange'}} colored height={50} width={70} onClick={setColor} /> */}
                {/* <Tab active={true ? color?.hex == 'orange' : false} value={color?.value} colored height={50} width={70} onClick={setColor} /> */}
              </div>
            </ModalDropdown>
          </div>
        </div>
        <div className='product-actions__submit'>
          <Button className='btn-main' title='Add to Cart' width='100%' />
        </div>
      </div>
      <Accordion items={accItems} />
    </div>
  )
}

export default ProductOptions