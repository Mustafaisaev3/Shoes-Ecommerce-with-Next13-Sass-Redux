'use client'

import Image from 'next/image'
import Button from '../UI/Button'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'
import NavUserInfo from './NavUserInfo'
import UserMenu from './UserMenu'
import { SafeUser } from '@/app/types'
import { BiMenu, BiSearch } from 'react-icons/bi'
import { useUI } from '@/app/context/ui.context'

interface NavbarProps {
    currentUser: SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const { openMobileMenu, openSearch } = useUI()

  return (
    <nav className="navbar">
        <div className="container">
            <div className='navbar__inner'>
                <div className='navbar__inner-actions'>
                    <Button rightIcon={BiMenu} className='btn__secondary menu-btn' onClick={openMobileMenu} />
                    <Button rightIcon={BiSearch} className='btn__secondary search-btn' onClick={openSearch} />
                </div>
                <div className='navbar__inner-left'>
                    <Logo />
                    <Menu />
                </div>
                <div className='navbar__inner-right'>
                    <NavUserInfo currentUser={currentUser} />
                    {/* <UserMenu currentUser={currentUser} /> */}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar