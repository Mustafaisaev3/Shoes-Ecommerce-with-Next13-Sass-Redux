'use client'

import { IconType } from 'react-icons'

interface TabProps {
  label?: string,
  value: string,
  onClick?: (value: any) => any,
  active?: boolean,
  disabled?: boolean,
  icon?: IconType,
  width?: number,
  height?: number,
}

const Tab: React.FC<TabProps> = ({label, value, onClick, active, disabled, icon: Icon, width, height}) => {

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
        style={{width: (width && `${width}px`), height: (height && `${height}px`)}}
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