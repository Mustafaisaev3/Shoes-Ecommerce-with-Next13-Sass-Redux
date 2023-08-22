'use client'
import { useState, useCallback } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import MenuItem from './MenuItem'
import { signOut } from 'next-auth/react'
import { SafeUser } from '@/app/types'
import { useRouter } from 'next/navigation'
import { ModalViewTypes, useUI } from '@/app/context/ui.context'
import { BiUser } from 'react-icons/bi'
import Button from '../UI/Button'

interface UserMenuProps {
    currentUser: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const { openModal, setModalView } = useUI()
  
  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value)
  }, [])

  const openRegisterModal = () => {
    setModalView(ModalViewTypes.REGISTER_VIEW)
    return openModal()
  }

  const openLoginModal = () => {
    setModalView(ModalViewTypes.LOGIN_VIEW)
    return openModal()
  }

  return (
    <div className="user-menu">
        <div className="user-menu__header">
            <div onClick={toggleOpen} className="user-menu__header-inner">
                {/* <AiOutlineMenu />
                <div className='avatar hidden md:block'>
                    <Avatar src={currentUser?.image} />
                </div> */}
                {currentUser ? (
                    <Button title={currentUser.name!} rightIcon={BiUser} className='btn__secondary' />
                ) : (
                    <Button title="Login" rightIcon={BiUser} className='btn__secondary' />
                )}
            </div>
        </div>
        {isOpen ? (
            <div className='user-menu__body absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                <div className='user-menu__list '>
                    {currentUser ? (
                        <>
                            <MenuItem onClick={() => router.push('/trips')} label="My trips" />
                            <MenuItem onClick={() => router.push('/favorites')} label="My favorites" />
                            <MenuItem onClick={() => router.push('/reservations')} label="My reservation" />
                            <MenuItem onClick={() => router.push('/properties')} label="My propertiese" />
                            {/* <MenuItem onClick={rentModal.onOpen} label="Airbnb my home" /> */}
                            <hr />
                            <MenuItem onClick={() => signOut()} label="Logout" />
                        </>
                    ) : (
                        <>
                            <MenuItem onClick={openLoginModal} label="Login" />
                            <MenuItem onClick={openRegisterModal} label="Sign up" />
                        </>

                    )}
                </div>
            </div>
        ) : null}
    </div>
  )
}

export default UserMenu