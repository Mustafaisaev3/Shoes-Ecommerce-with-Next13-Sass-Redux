'use client'

import Button from "../UI/Button"

const DoubleBanner = () => {
  return (
    <div className="double-banner">
        <div className="container">
            <div className="double-banner__inner">
                <div className="double-banner__item">
                    <div className="double-banner__item-content">
                        <div className="double-banner__item-subtitle">Sneakers Air Jordan</div>
                        <div className="double-banner__item-title">Just Starting At $450</div>
                        <Button title="SHOP NOW" className="btn__bordered"  />
                    </div>
                    <div className="double-banner__item-img">
                        <img src="/images/DoubleBanner/banner1.png" alt="double-banner-img-1" />
                    </div>
                </div>
                <div className="double-banner__item">
                    <div className="double-banner__item-content">
                        <div className="double-banner__item-subtitle">Nike Air Max</div>
                        <div className="double-banner__item-title">Just Starting At $350</div>
                        <Button title="SHOP NOW" className="btn__bordered"  />
                    </div>
                    <div className="double-banner__item-img">
                        <img src="/images/DoubleBanner/banner2.png" alt="double-banner-img-2" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoubleBanner