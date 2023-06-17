'use client'

import Image from 'next/image'
import Button from '../UI/Button'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'
import NavUserInfo from './NavUserInfo'

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {
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
                    <NavUserInfo />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar