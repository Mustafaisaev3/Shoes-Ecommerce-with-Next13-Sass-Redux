'use client'

import { IconType } from 'react-icons'

interface TabProps {
  label?: string,
  value: string | {value: any, hex: string} | any,
  onClick?: (value: any) => any,
  active?: boolean,
  disabled?: boolean,
  icon?: IconType,
  width?: number,
  height?: number,
  colored?: boolean
}

const Tab: React.FC<TabProps> = ({label, value, onClick, active, disabled, icon: Icon, width, height, colored}) => {

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
        onClick={onClick}
        style={{width: (width && `${width}px`), height: (height && `${height}px`)}}
    >   
        {colored ? (
          <span className='tab__label colored' style={{backgroundColor: value.hex}}></span>
        ) : (
          <span className='tab__label'>{label}</span>
        )}
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