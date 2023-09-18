'use client'

import HeroMobileSlider from "./HeroMobileSlider"
import HeroSlider from "./HeroSlider"

interface HeroProps {

}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="hero">
        <div className="container">
          <HeroSlider />
          <HeroMobileSlider />
        </div>
    </div>
  )
}

export default Hero