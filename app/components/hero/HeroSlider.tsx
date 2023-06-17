'use client'

import { useEffect, useState } from "react"
import SliderContent from "./SliderContent"
import SliderTabs from "./SliderTabs"
import { HeroSliderData } from "@/data/HeroSliderData"

const HeroSlider = () => {
  const [activeItem, setActiveItem] = useState(HeroSliderData[0])

  return (
    <div className='hero__slider'>
        <SliderTabs data={HeroSliderData} activeItem={activeItem} setActiveItem={setActiveItem} />
        <SliderContent item={activeItem} />
    </div>
  )
}

export default HeroSlider