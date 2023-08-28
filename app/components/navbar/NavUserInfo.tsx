'use client'

import Button from "../UI/Button"
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BiUser } from 'react-icons/bi'
import { useUI } from "@/app/context/ui.context"
import { ModalViewTypes } from "@/app/context/ui.context"
import getCurrentUser from "@/app/actions/getCurrentUser"
import UserMenu from "./UserMenu"
import { SafeUser } from "@/app/types"
import { useCart } from "@/app/context/Cart/cart.context"
// import Badge from "../UI/Badge"
import dynamic from "next/dynamic"

const BadgeComp = dynamic(
  () => import('../UI/Badge'),
{ssr: false}
);

interface NavUserInfoProps {
  currentUser: SafeUser | null
}


const NavUserInfo: React.FC<NavUserInfoProps> = ({ currentUser }) => {
  const { openDrawer, openModal, setModalView } = useUI()
  const { totalItems } = useCart()

  const handleCartClick = () => {
    return openDrawer()
  }

  const handleAuthClick = () => {
    setModalView(ModalViewTypes.LOGIN_VIEW)
    return openModal()
  }

  return (
    <div className="navbar__user-info">
        <div style={{position: 'relative'}}>
          <Button title="Cart" rightIcon={HiOutlineShoppingBag} className='btn__secondary' onClick={handleCartClick} />
          <BadgeComp text={totalItems} />
        </div>
        {/* <Button title="Login" rightIcon={BiUser} className='btn__secondary' onClick={handleAuthClick} /> */}
        <UserMenu currentUser={currentUser} />
    </div>
  )
}

export default NavUserInfo