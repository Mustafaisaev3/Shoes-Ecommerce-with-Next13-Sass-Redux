'use client'

interface MenuItemProps {
    title: string
}

const MenuItem: React.FC<MenuItemProps> = ({ title }) => {
  return (
    <div className='menu__item'>{title}</div>
  )
}

export default MenuItem