'use client'

import { ChangeEventHandler, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"
import qs from 'query-string';
import { useUI } from "@/app/context/ui.context";
import Logo from "../../navbar/Logo";
import Search from "../../Search";
import { MenuListData } from "../../navbar/Menu";
import axios from "axios";
import toast from "react-hot-toast";
import { useDebounce } from "@/app/hooks/useDebounce";

const SearchModal = () => {
  const [search, setSearch] = useState('')
  const [searchProducts, setSearchProducts] = useState<any>([])

  const router = useRouter()
  const params = useSearchParams()

  const { closeMobileMenu } = useUI()
  
  const handleCategoryItemClick = (category: string) => {
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
    closeMobileMenu()
  }

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.currentTarget.value)
  }

  const debouncedSearchQuery = useDebounce(search, 500)

  const searchHandler = (query?: string) => {
    const url = qs.stringifyUrl({
      url: '/api/search/',
      query: {q: query}
    }, { skipNull: true });

    axios.get(url)
    .then(({ data }) => {
      setSearchProducts(data.products)
    })
    .catch((error) => {
      console.log(error.message)
      toast.error('Something went wrong.')
    })
  };

  useEffect(() => {
    searchHandler(debouncedSearchQuery)
  }, [debouncedSearchQuery])

  return (
    <div className="search">
      <div className="search__logo">
        <Logo />
      </div>
      <div className="search__body">
        <Search placeholder="Search" onChange={onSearchChange} />
        <div className="search__content">
          {searchProducts.length ? (
            <div className="search__result">
              <ul className="search__result-list">
                {searchProducts.map((product: any) => {
                  return (
                    <li className="search__result-item"><a href={`/products/${product.id}`}>{product.name}</a></li>
                  )
                })}
              </ul>
            </div>
          ) : (
            <div className="search__empty-container">
              <div className="search__empty-title">Or explore our popular categories:</div>
              <ul className="search__categories-list">
                {MenuListData.map((categoryItem) => {
                  return (
                    <li className="category-list__item" onClick={() => handleCategoryItemClick(categoryItem.category)}>{categoryItem.label}</li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchModal