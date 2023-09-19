'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useLayoutEffect, useState } from "react"
import qs from 'query-string';
import CategoryFilter from "../filters/CategoryFilter"
import ColorFilter from "../filters/ColorFilter"
import FilterBlock from "../filters/FilterBlock"
import PriceFilter from "../filters/PriceFilter"
import SizeFilter from "../filters/SizeFilter"

interface FiltersInterface {
    // category: string[],
    size: string | null | (string | null)[],
    color: string | null | (string | null)[],
    price: [number, number] | number[]
}

const CollectionFilters: React.FC<any> = ({ className }) => {
  const router = useRouter()
  const params = useSearchParams()
  let currentParams 

  if (params) {
    currentParams = qs.parse(params.toString())
  }
  
  const [filters, setFilters] = useState<FiltersInterface>({
    size: currentParams?.size || null,
    price: [parseInt(currentParams?.minPrice as string), parseInt(currentParams?.maxPrice as string)] || [0, 1000],
    color: currentParams?.color || null
  })

  // useLayoutEffect(() => {
  //   if (params) {
  //     let currentParams = qs.parse(params.toString())
  
  //     if (currentParams.color) {
  //       setFilters(prev => ({...prev, color: currentParams.color}))
  //     }

  //     if (currentParams.size) {
  //       setFilters(prev => ({...prev, size: currentParams.size}))
  //     }

  //     if (currentParams.minPrice && currentParams.maxPrice) {
  //       const min = parseInt(currentParams.minPrice as string)
  //       const max = parseInt(currentParams.maxPrice as string)
  //       setFilters(prev => ({...prev, price: [min, max]}))
  //     }
  //   }

  //   console.log(filters)
  // }, [])

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
    setFilters(prev => ({...prev, price: [...value]}))
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
    <div className={`collection-filters ${className}`}>
        <div className="collection-filters__header">
          Filters
        </div>
        <ColorFilter value={filters.color} getColor={getColor}/>
        <SizeFilter value={filters.size} getSize={getSize} />
        <PriceFilter values={filters.price as [number, number]} getPrice={getPrice} />
        <button className="btn btn-main " onClick={resetFilters}>Reset</button>
    </div>
  )
}

export default CollectionFilters