'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import qs from 'query-string';
import CategoryFilter from "../filters/CategoryFilter"
import ColorFilter from "../filters/ColorFilter"
import FilterBlock from "../filters/FilterBlock"
import PriceFilter from "../filters/PriceFilter"
import SizeFilter from "../filters/SizeFilter"

interface FiltersInterface {
    // category: string[],
    size: string | null,
    color: string | null,
    price: number[]
}

const CollectionFilters: React.FC = () => {
  const router = useRouter()
  const params = useSearchParams()
  
  const [filters, setFilters] = useState<FiltersInterface>({
    size: null,
    price: [],
    color: null
  })

  // const getCategory = (value: string) => {
  //   if (filters.category.includes(value)) {
  //       const filteredCategoryArr = filters.category.filter((item: string) => {
  //         return item !== value
  //       })

  //       setFilters(prev => ({...prev, category: [...filteredCategoryArr]}))
  //   } else {
  //       setFilters(prev => ({...prev, category: [...prev.category, value]}))
  //   }
    
  // }

  const getSize = (value: any) => {
    if (filters.size === value) {
      return
    }
    setFilters(prev => ({...prev, size: value}))
  }

  const getPrice = (value: any) => {
    if (filters.price === value) {
      return
    }
    setFilters(prev => ({...prev, price: value}))
  }

  const getColor = (value: any) => {
    if (filters.color === value) {
      return
    }
    setFilters(prev => ({...prev, color: value}))
  }

  useEffect(() => {
    let currentQuery = {}

    if (params) {
        currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
        ...currentQuery,
        color: filters.color,
        size: filters.size,
        minPrice: filters.price[0],
        maxPrice: filters.price[1],
    }

    // if (params?.get('category') === activeCategory) {
    //     delete updatedQuery.category;
    // }

    const url = qs.stringifyUrl({
        url: '/collections/',
        query: updatedQuery
    }, { skipNull: true });
  
    router.push(url);
  }, [filters])

  const resetFilters = () => {
    router.push('/collections');
  }

  return (
    <div className='collection-filters'>
        <div className="collection-filters__header">
          Filters
        </div>
        <ColorFilter getColor={getColor}/>
        <SizeFilter getSize={getSize} />
        <PriceFilter getPrice={getPrice} />
        <button className="btn btn-main " onClick={resetFilters}>Reset</button>
    </div>
  )
}

export default CollectionFilters