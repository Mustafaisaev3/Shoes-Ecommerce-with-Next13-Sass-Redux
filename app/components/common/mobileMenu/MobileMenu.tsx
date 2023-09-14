'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { MenuListData } from "../../navbar/Menu"
import qs from 'query-string';
import { useUI } from "@/app/context/ui.context";
import Logo from "../../navbar/Logo";

const MobileMenu = () => {
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

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__logo">
        <Logo />
      </div>
      <div className="category-list">
          {MenuListData.map((categoryItem) => {
              return (
                  <div className="category-list__item" onClick={() => handleCategoryItemClick(categoryItem.category)}>{categoryItem.label}</div>
              )
          })}
      </div>
    </div>
  )
}

export default MobileMenu