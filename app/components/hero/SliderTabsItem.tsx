'use client'

interface SliderTabsItemProps {
    title: string,
    className: string,
    onClick: () => any,
}

const SliderTabsItem: React.FC<SliderTabsItemProps> = ({ title, onClick, className }) => {
  return (
    <div className={`slider-tabs__item ${className}`} onClick={onClick}>
        Tab {title}
    </div>
  )
}

export default SliderTabsItem