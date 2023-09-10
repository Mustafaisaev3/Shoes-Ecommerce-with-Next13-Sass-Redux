'use client'

import { signOut } from 'next-auth/react'
import { BsCart3, BsHeart } from "react-icons/bs"
import { BiUser } from "react-icons/bi"
import { MdLogout } from "react-icons/md"
import { ACCOUNT_TABS } from "./AccountClient"
import { useRouter } from 'next/navigation'

type AccountSidebarTypes = {
    activeTab: string,
}

const AccountSidebar: React.FC<AccountSidebarTypes> = ({ activeTab }) => {
  const router = useRouter()

  return (
    <div className="account-sidebar">
        <ul className="account-sidebar__list">
            <li 
                className={`account-sidebar__item ${activeTab === ACCOUNT_TABS.ORDERS ? 'active' : ''}`} 
                onClick={() => router.push('/account/orders')}
            >
                <span><BsCart3 size={18} /></span>
                Orders
            </li>
            <li 
                className={`account-sidebar__item ${activeTab === ACCOUNT_TABS.FAVORITES ? 'active' : ''}`}
                onClick={() => router.push('/account/favorites')}
            >
                <span><BsHeart size={18} /></span>
                Favorites
            </li>
            <li 
                className={`account-sidebar__item ${activeTab === ACCOUNT_TABS.USER_INFO ? 'active' : ''}`}
                onClick={() => router.push('/account/user-info')}
            >
                <span><BiUser size={18} /></span>
                User Info
            </li>
            <li className="account-sidebar__item" onClick={() => signOut()}>
                <span><MdLogout size={18} /></span>
                Logout
            </li>
        </ul>
    </div>
  )
}

export default AccountSidebar