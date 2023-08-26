'use client'

import { useCallback, useEffect, useState } from 'react'
import Breadcrumb from '../Breadcrumb'
import Dropdown from '../UI/Dropdown'
import Tab from '../UI/Tab'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string';

const Categories = [
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
    {
        label: 'Slippers',
        value: 'slippers',
    },
]

const options = [
    { value: 10, label: 10 },
    { value: 25, label: 25 },
    { value: 50, label: 50 }
  ];

const CollectionTopbar = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [perPage, setPerPage] = useState<number | string>(10)

  const router = useRouter()
  const params = useSearchParams()

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category)
  }

  useEffect(() => {
    let currentQuery = {}

    if (params) {
        currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
        ...currentQuery,
        category: activeCategory,
        page: 1,
        perPage
    }

    if (params?.get('category') === activeCategory) {
        delete updatedQuery.category;
    }

    const url = qs.stringifyUrl({
        url: '/collections/',
        query: updatedQuery
    }, { skipNull: true });
  
    router.push(url);
  }, [activeCategory, perPage])

  return (
    <div className='collection-topbar'>
        <div className='collection-topbar__header'>
            Products Grid
            <Breadcrumb />
        </div>
        <div className='collection-topbar__content'>
            <div className='collection-topbar__categories'>
                {Categories.map((item: any) => {
                    return <Tab key={item.label} label={item.label} value={item.value} active={activeCategory === item.value} onClick={() => handleCategorySelect(item.value)} />
                })}
            </div>
            <Dropdown options={options} getValue={setPerPage} />
        </div>
    </div>
  )
}

export default CollectionTopbar