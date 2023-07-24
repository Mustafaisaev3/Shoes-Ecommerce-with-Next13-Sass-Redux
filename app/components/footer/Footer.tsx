import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='footer__inner'>
                <div className='footer__main'>
                    <div className='footer__widget footer__widget-contact'>
                        <h3 className="footer__title">Contact Us</h3>
                        <div className='footer__info-list'>
                            <ul>
                                <li>
                                    <span>Nike Demo Store</span>
                                    <span>No. 1259 Freedom, New York </span>
                                    <span>United States</span>
                                </li>
                                <li><span>demo@exampledemo.com</span></li>
                                <li><span>+91-987654321</span></li>
                            </ul>
                        </div>                    
                    </div>
                    <div className='footer__widget footer__widget-info'>
                        <h3 className="footer__title">Information</h3>
                        <div className="footer-info-list">
                            <ul>
                                <li>
                                <a href="#">Product Support</a>
                                </li>
                                
                                <li>
                                <a href="/checkout">Checkout</a>
                                </li>
                                
                                <li>
                                <a href="#">License Policy</a>
                                </li>
                                
                                <li>
                                <a href="#">Affiliate</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className='footer__widget footer__widget-service'>
                        <h3 className="footer__title">Customer Service</h3>
                        <div className="footer-info-list">
                            <ul>
                                <li>
                                <a href="/pages/about-us">Help Center</a>
                                </li>
                                
                                <li>
                                <a href="/pages/about-us">Redeem Voucher</a>
                                </li>
                                
                                <li>
                                <a href="#">Contact Us</a>
                                </li>
                                
                                <li>
                                <a href="#">Policies &amp; Rules</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className='footer__widget footer__widget-download'>
                        <h3 className="footer__title">Download Our App</h3>
                        <p>Download our App and get extra 15% Discount on your first Order..! </p>
                        <div className="footer__apps">
                            <a href="#"><img src="/images/google-play.webp" alt="" /></a>
                            <a href="#"><img src="/images/app-store.webp" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__bottom">
            <div className="container">
                <div className='footer__bottom-inner'>
                    <p>Copyright © Nike | Built with Drou by Team90Degree.</p>
                    <img src="/images/payment-method.avif" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer