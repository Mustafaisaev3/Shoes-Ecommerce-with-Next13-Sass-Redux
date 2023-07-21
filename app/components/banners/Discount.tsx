'use client'

import { SiNike } from 'react-icons/si'
import Button from '../UI/Button'

const Discount = () => {
  return (
    <div className="discount">
        {/* <div className="container"> */}
            <div className="discount__inner">
                <div className="discount__inner-container">
                    <div className="discount__left">
                        <img src="/images/discount_banner.jpg" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="" />
                        <span>DISC</span>
                        <SiNike size={100} color='white' className='discount__nike-icon' />
                    </div>
                    <div className="discount__right">
                        <div className='discount__right-inner'>
                            <div className='discount__right-title'>FRAME THE DAY</div>
                            <div className='discount__right-subtitle'>FOTWEAR BY NIKE</div>
                            <Button className='btn__secondary' title='Shop Now' />
                        </div>
                        <div className='ount'>
                            <div className='ount__inner'>
                                <span className='ount__first'>OUNT</span>
                                <span className='ount__second'>OUNT</span>
                            </div>
                        </div>
                    </div>
                    <div className="discount__sale-bage">
                        65% <span>OFF</span> 
                    </div>
                </div>
            </div>
        {/* </div> */}
    </div>
  )
}

export default Discount