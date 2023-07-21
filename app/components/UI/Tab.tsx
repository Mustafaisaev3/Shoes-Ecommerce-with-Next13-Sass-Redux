'use client'

import { IconType } from 'react-icons'

interface TabProps {
    label?: string,
    value: string,
    onClick?: (value: any) => any,
    active?: boolean,
    disabled?: boolean,
    icon?: IconType,
}

const Tab: React.FC<TabProps> = ({label, value, onClick, active, disabled, icon: Icon}) => {

  const handleTabClick = () => {
    onClick && onClick(value)
  }

  return (
    <div 
        className={`
            tab
            ${active && 'active'}
            ${disabled && 'disabled'}
        `}
        onClick={handleTabClick}
    >
        <span className='tab__label'>{label}</span>
        {Icon && (
            <Icon
                size={20}
                className="tab__icon"
            />
        )}
    </div>
  )
}

export default Tab