'use client'

import useCountdown from "@/app/hooks/useCountdown"
import Button from "../UI/Button"

const SaleBanner = () => {
  const { Days, Hours, Minutes, Seconds } = useCountdown({day: 29, month: 'May', year: 2024})

  return (
    <div className="sale-banner">
        <div className="container">
            <div className="sale-banner__inner">
                <div className="sale-banner__content">
                    <div className="sale-banner__bage">Hurry Up !</div>
                    <div className="sale-banner__title">
                        <div className="sale-banner__title-first">Up To 25% Discount</div>
                        <div className="sale-banner__title-second">Check it Out</div>
                    </div>
                    <div className="sale-banner__timer">
                        <div className="sale-banner__timer-item">
                            <span className="sale-banner__timer-num">{Days}</span>
                            <span className="sale-banner__timer-text">DAYS</span>
                        </div>
                        <div className="sale-banner__timer-item">
                            <span className="sale-banner__timer-num">{Hours}</span>
                            <span className="sale-banner__timer-text">HRS</span>
                        </div>
                        <div className="sale-banner__timer-item">
                            <span className="sale-banner__timer-num">{Minutes}</span>
                            <span className="sale-banner__timer-text">MINS</span>
                        </div>
                        <div className="sale-banner__timer-item">
                            <span className="sale-banner__timer-num">{Seconds}</span>
                            <span className="sale-banner__timer-text">SECS</span>
                        </div>
                    </div>
                    <Button title="Shop Now" className="btn__secondary"/>
                </div>
                <img className="sale-banner__img" src="images/SaleBanner/Nike_Sneakers.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default SaleBanner