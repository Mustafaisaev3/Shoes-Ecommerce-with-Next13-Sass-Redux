'use client'

import Image from 'next/image'
import Button from '../UI/Button'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'
import NavUserInfo from './NavUserInfo'
import UserMenu from './UserMenu'
import { SafeUser } from '@/app/types'

interface NavbarProps {
    currentUser: SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <nav className="navbar">
        <div className="container">
            <div className='navbar__inner'>
                <div className='navbar__inner-left'>
                    <Logo />
                    <Menu />
                </div>
                <div className='navbar__inner-right'>
                    <Search />
                    <NavUserInfo currentUser={currentUser} />
                    {/* <UserMenu currentUser={currentUser} /> */}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar