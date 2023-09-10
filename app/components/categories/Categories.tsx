'use client'

import { useEffect, useState } from 'react'
import axios from "axios";
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
  const [products, setProducts] = useState<any>(null)

  const fetchProductsByCategory = async () => {
    try {
        const { data } = await axios.get(`/api/products?category=${activeCategory}`)
        setProducts(data.products)
    } catch (error) {
        console.log(error)
        throw new Error('Internal Error')
    }

  }

  useEffect(() => {
    fetchProductsByCategory()
  }, [activeCategory])

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
                {products && products.map((product: any) => {
                    return <ProductCard product={product} width={'100%'} key={product.id} />
                })}
            </div>
        </div>
    </Container>
  )
}

export default Categories