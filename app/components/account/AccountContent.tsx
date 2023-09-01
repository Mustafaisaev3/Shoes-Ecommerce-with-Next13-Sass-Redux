'use client'

import { Order } from "@prisma/client"
import { ACCOUNT_TABS } from "./AccountClient"
import Orders from "./orders/Orders"

type AccountContentTypes = {
    activeTab: ACCOUNT_TABS,
    orders: Order[]
}

const AccountContent: React.FC<AccountContentTypes> = ({ activeTab, orders }) => {
  return (
    <div className="account-content">
        {activeTab === ACCOUNT_TABS.ORDERS && <Orders orders={orders} />}
    </div>
  )
}

export default AccountContent