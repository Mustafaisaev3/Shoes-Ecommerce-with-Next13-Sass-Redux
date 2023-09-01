'use client'

import { useState } from "react"
import AccountContent from "./AccountContent"
import AccountSidebar from "./AccountSidebar"
import { Order } from "@prisma/client"
import { SafeOrder } from "@/app/types"

export enum ACCOUNT_TABS {
    ORDERS = 'Orders',
    FAVORITES = 'Faworites',
    USER_INFO = 'User Info'
}

type AccountClientTypes = {
    orders: SafeOrder[] | null
}

const AccountClient: React.FC<AccountClientTypes> = ({ orders }) => {
  const [activeTab, setActiveTab] = useState<ACCOUNT_TABS>(ACCOUNT_TABS.ORDERS)

  return (
    <div className="account-wrapper">
        <AccountSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <AccountContent activeTab={activeTab} orders={orders} />
    </div>
  )
}

export default AccountClient