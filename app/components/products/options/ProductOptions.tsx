'use client'

import { useState } from 'react'
import Accordion from '../../UI/Accordion'
import ModalDropdown from '../../UI/ModalDropdown'
import Tab from '../../UI/Tab'
import { MdGppGood, MdAssignmentReturn } from 'react-icons/md'
import { FaTruck } from 'react-icons/fa'
import Button from '../../UI/Button'

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

const ProductOptions = () => {
  const [size, setSize] = useState<null | string>(null)

  return (
    <div className='product-options__wrapper'>
      <div className='product-brand'>Nike</div>
      <div className="product-name">
        <h2>AIR JORDAN 1 RETRO HIGH OG</h2>
      </div>
      <div className="product-price">
        <span>293 $</span>
      </div>
      <div className="product-actions">
        <div className='product-actions__selects'>
          <div className='size'>
            <ModalDropdown title={'size'} activeValue={size} setValue={setSize}>
              <div className='size-container'>
                <Tab active={true ? size == 'S' : false} label='S' value='S' height={50} width={70} onClick={setSize} />
                <Tab active={true ? size == 'M' : false} label='M' value='M' height={50} width={70} onClick={setSize} />
                <Tab active={true ? size == 'L' : false} label='L' value='L' height={50} width={70} onClick={setSize} />
                <Tab active={true ? size == 'XL' : false} label='XL' value='XL' height={50} width={70} onClick={setSize} />
                <Tab active={true ? size == 'XXL' : false} label='XXL' value='XXL' height={50} width={70} onClick={setSize} />
              </div>
            </ModalDropdown>
          </div>
          <div className='color'>
            <ModalDropdown title={'color'} activeValue={size} setValue={setSize}>
              <div className='size-container'>
                <Tab active={true ? size == 'S' : false} label='S' value='S' height={50} width={70} onClick={setSize} />
                <Tab active={true ? size == 'M' : false} label='M' value='M' height={50} width={70} onClick={setSize} />
                <Tab active={true ? size == 'L' : false} label='L' value='L' height={50} width={70} onClick={setSize} />
                <Tab active={true ? size == 'XL' : false} label='XL' value='XL' height={50} width={70} onClick={setSize} />
                <Tab active={true ? size == 'XXL' : false} label='XXL' value='XXL' height={50} width={70} onClick={setSize} />
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