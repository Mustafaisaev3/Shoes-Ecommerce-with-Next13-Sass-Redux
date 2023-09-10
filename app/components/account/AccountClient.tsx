'use client'

import { useState } from "react"
import AccountContent from "./AccountContent"
import AccountSidebar from "./AccountSidebar"
import { Order, Product } from "@prisma/client"
import { SafeOrder, SafeProduct } from "@/app/types"
import { useParams } from "next/navigation"

export enum ACCOUNT_TABS {
    ORDERS = 'orders',
    FAVORITES = 'favorites',
    USER_INFO = 'user-info'
}

type AccountClientTypes = {
    orders: SafeOrder[] | null,
    favoriteProducts: SafeProduct[] | null
}

type ParamsType = {
  tab: string
}

const AccountClient: React.FC<AccountClientTypes> = ({ orders, favoriteProducts }) => {
  const params = useParams()
  const { tab } = params as ParamsType

  return (
    <div className="account-wrapper">
        <AccountSidebar activeTab={tab} />
        <AccountContent activeTab={tab} orders={orders} favoriteProducts={favoriteProducts} />
    </div>
  )
}

export default AccountClient