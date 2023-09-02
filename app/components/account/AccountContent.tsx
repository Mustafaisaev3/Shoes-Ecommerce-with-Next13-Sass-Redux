'use client'

import { SafeOrder, SafeProduct } from "@/app/types"
import { Order } from "@prisma/client"
import { ACCOUNT_TABS } from "./AccountClient"
import Favorites from "./favorites/Favorites"
import Orders from "./orders/Orders"

type AccountContentTypes = {
    activeTab: ACCOUNT_TABS,
    orders: SafeOrder[] | null,
    favoriteProducts: SafeProduct[] | null,
}

const AccountContent: React.FC<AccountContentTypes> = ({ activeTab, orders, favoriteProducts }) => {
  return (
    <div className="account-content">
        {activeTab === ACCOUNT_TABS.ORDERS && <Orders orders={orders} />}
        {activeTab === ACCOUNT_TABS.FAVORITES && <Favorites favoriteProducts={favoriteProducts} />}
    </div>
  )
}

export default AccountContent