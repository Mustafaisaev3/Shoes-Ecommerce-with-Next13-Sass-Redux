'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string';
import MenuItem from './MenuItem'

const MenuListData = [
  {
    label: 'Mens',
    category: 'men'
  },
  {
    label: 'Womens',
    category: 'women'
  },
  {
    label: 'Kids',
    category: 'kids'
  },
  {
    label: 'Slippers',
    category: 'slippers'
  },
]

const Menu = () => {
  const router = useRouter()
  const params = useSearchParams()

  const handleMenuItemClick = (category: string) => {
    let currentQuery = {}

    if (params) {
        currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
        ...currentQuery,
        category
    }

    const url = qs.stringifyUrl({
        url: '/collections/',
        query: updatedQuery
    }, { skipNull: true });
  
    router.push(url);
  }

  return (
    <div className='menu'>
        {MenuListData.map((menuItem: any) => {
          return <MenuItem label={menuItem.label} onClick={() => handleMenuItemClick(menuItem.category)} />
        })}
    </div>
  )
}

export default Menu