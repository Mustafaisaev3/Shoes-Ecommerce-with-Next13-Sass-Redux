'use client'

import HeroSlider from "./HeroSlider"

interface HeroProps {

}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="hero">
        <div className="container">
            <HeroSlider />
        </div>
    </div>
  )
}

export default Hero