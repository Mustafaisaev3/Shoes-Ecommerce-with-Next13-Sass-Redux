'use client'

import Button from "../UI/Button"
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BiUser } from 'react-icons/bi'

const NavUserInfo = () => {
  return (
    <div className="navbar__user-info">
        <Button title="Cart" rightIcon={HiOutlineShoppingBag} className='btn__secondary' />
        <Button title="Login" rightIcon={BiUser} className='btn__secondary' />
    </div>
  )
}

export default NavUserInfo