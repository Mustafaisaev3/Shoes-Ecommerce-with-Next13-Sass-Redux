'use client'

import { useState } from "react"
import AccountContent from "./AccountContent"
import AccountSidebar from "./AccountSidebar"
import { Order, Product } from "@prisma/client"
import { SafeOrder, SafeProduct } from "@/app/types"

export enum ACCOUNT_TABS {
    ORDERS = 'Orders',
    FAVORITES = 'Faworites',
    USER_INFO = 'User Info'
}

type AccountClientTypes = {
    orders: SafeOrder[] | null,
    favoriteProducts: SafeProduct[] | null
}

const AccountClient: React.FC<AccountClientTypes> = ({ orders, favoriteProducts }) => {
  const [activeTab, setActiveTab] = useState<ACCOUNT_TABS>(ACCOUNT_TABS.ORDERS)

  return (
    <div className="account-wrapper">
        <AccountSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <AccountContent activeTab={activeTab} orders={orders} favoriteProducts={favoriteProducts} />
    </div>
  )
}

export default AccountClient