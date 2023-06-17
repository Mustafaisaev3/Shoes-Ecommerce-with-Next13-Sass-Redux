'use client'

import SliderTabsItem from "./SliderTabsItem"
import { HeroSliderData } from "@/data/HeroSliderData"

interface SliderTabsProps {
  data: typeof HeroSliderData,
  activeItem: typeof HeroSliderData[0],
  setActiveItem: (item: any) => any
}

const SliderTabs: React.FC<SliderTabsProps> = ({ data, activeItem, setActiveItem }) => {

  const handleSliderItemSelect = (item: any) => {
    setActiveItem(item)
  }

  return (
    <div className='hero__slider-tabs slider-tabs'>
      <div className="slider-tabs__inner">
        {data.map((item: any) => {
          return (
            <SliderTabsItem key={item.id} title={item.id} onClick={() => handleSliderItemSelect(item)} className={`${item.id === activeItem.id && 'active'}`} />
          )
        })}
      </div>
    </div>
  )
}

export default SliderTabs