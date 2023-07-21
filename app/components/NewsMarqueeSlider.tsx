'use client'

import Marquee from "react-fast-marquee";

const NewsMarqueeSlider = () => {
  return (
    <div className="news-slider">
        <div className="container">
            <div className="news-slider__inner">
                <Marquee 
                    pauseOnHover={true}
                >
                    <div className="news-slider__item">
                        Free delivery - Return over $100.00 ( Excluding Homeware ) | Free Collect From Store
                    </div>
                    <div className="news-slider__item">
                        Design Week / 15% Off the website / Code: AYOSALE-2020  
                    </div>
                    <div className="news-slider__item">
                        Orders shipping as usual. See more: COVID-19 FAQ
                    </div>
                    <div className="news-slider__item">
                        Now organic. Introducing the $20 Organic Tee.
                    </div>
                    <div className="news-slider__item">
                        With each receipt over $150 from AYO Store get voucher 15% off immediately. 
                    </div>
                </Marquee>
            </div>
        </div>
    </div>
  )
}

export default NewsMarqueeSlider