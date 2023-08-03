'use client'

import { useState } from 'react'
import Breadcrumb from '../Breadcrumb'
import Dropdown from '../UI/Dropdown'
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

const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' }
  ];

const CollectionTopbar = () => {
  const [activeCategory, setActiveCategory] = useState(tabsData[0].value)

  return (
    <div className='collection-topbar'>
        <div className='collection-topbar__header'>
            Products Grid
            <Breadcrumb />
        </div>
        <div className='collection-topbar__content'>
            <div className='collection-topbar__categories'>
                {tabsData.map((item: any) => {
                    return <Tab label={item.label} value={item.value} active={activeCategory === item.value} onClick={setActiveCategory} />
                })}
            </div>
            <Dropdown options={options} />
        </div>
    </div>
  )
}

export default CollectionTopbar