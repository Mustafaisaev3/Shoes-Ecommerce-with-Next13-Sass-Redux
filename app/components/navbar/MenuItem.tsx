'use client'

interface MenuItemProps {
    label: string,
    onClick: () => void,
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return (
    <div className='menu__item' onClick={onClick}>{ label }</div>
  )
}

export default MenuItem