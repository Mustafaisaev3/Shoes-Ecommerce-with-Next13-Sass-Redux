'use client'

import { useState } from 'react'
import Container from '../Container'
import ProductCard from '../products/ProductCard'
import Heading from '../UI/Heading'
import Tab from '../UI/Tab'

const tabsData = [
    {
        label: 'Popular',
        value: 'popular',
    },
    {
        label: 'Men',
        value: 'men',
    },
    {
        label: 'Women',
        value: 'women',
    },
    {
        label: 'Kids',
        value: 'kids',
    },
]

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(tabsData[0].value)

  return (
    <Container>
        <div className='categories__inner'>
            <Heading title='New Arrivals' spanword='Shoes' align='right' />
            <div className='categories__tabs'>
                <ul className='tabs__list'>
                    {tabsData.map((item: any) => {
                        return <Tab label={item.label} value={item.value} active={activeCategory === item.value} onClick={setActiveCategory} />
                    })}
                </ul>
            </div>
            <div className='categories__content'>
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
            </div>
        </div>
    </Container>
  )
}

export default Categories