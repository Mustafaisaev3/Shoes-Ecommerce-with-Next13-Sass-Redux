'use client'

import { useEffect, useState } from "react"
import CategoryFilter from "../filters/CategoryFilter"
import FilterBlock from "../filters/FilterBlock"
import PriceFilter from "../filters/PriceFilter"

interface FiltersInterface {
    category: string[],
    price: number | null
}

const CollectionFilters: React.FC = () => {
  const [filters, setFilters] = useState<FiltersInterface>({
    category: [],
    price: null
  })

  const getCategory = (value: string) => {
    if (filters.category.includes(value)) {
        const filteredCategoryArr = filters.category.filter((item: string) => {
            return item !== value
        })

        setFilters(prev => ({...prev, category: [...filteredCategoryArr]}))
    } else {
        setFilters(prev => ({...prev, category: [...prev.category, value]}))
    }
    
  }

  const getPrice = (value: any) => {
    if (filters.price === value) {
        return
    }
    setFilters(prev => ({...prev, price: value}))
  }

  useEffect(() => {
    console.log('state changed')
  }, [filters])

  return (
    <div className='collection-filters'>
        <div className="collection-filters__header">
          Filters
        </div>
        <CategoryFilter getCategory={getCategory} />
        <PriceFilter getPrice={getPrice} />
        <CategoryFilter getCategory={getCategory} />
        <button className="btn btn-main " onClick={() => console.log(filters)}>filters</button>
    </div>
  )
}

export default CollectionFilters