'use client'

type PaymentCardTypes = {
    isRotate: boolean,
    cardNumber: string,
    cardHolderName: string,
    expityDate: string,
    CVV: string | number
}

const PaymentCard: React.FC<PaymentCardTypes> = ({ isRotate, cardNumber, cardHolderName, expityDate, CVV }) => {

  return (
    <div className="payment-card__container">
        <div className={`payment-card ${isRotate ? 'active' : ''}`} >
            <div className='payment-card front'>
                <div className="payment-card__inner">
                    <div className="payment-card__header">
                        <img className="chip" src="/images/PaymentCard/chip.png" alt="" />
                        <img className="company" src="/images/PaymentCard/visa.png" alt="" />
                    </div>
                    <div className="payment-card__content"> 
                        {cardNumber.replace(/[^0-9]/gi, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim()}
                    </div>
                    <div className="payment-card__footer">
                        <div className="cardholder-name">
                            <p>Card Holder name</p>
                            <h2>{cardHolderName}</h2>
                        </div>
                        <div className="expiry-date">
                            <p>Expity Date</p>
                            <h2>{expityDate.replace(/[^0-9]/gi, '').slice(0, 4).replace(/(.{2})/, '$1\/').trim()}</h2>
                        </div>
                    </div>
                </div>
                <img className="payment-card__img" src="/images/PaymentCard/credit_card_bg.jpeg" alt="" />
            </div>
            <div className='payment-card back'>
                <div className="payment-card__inner">
                    <div className="black-line"></div>
                    <div className="zip-code">
                        <span>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </span>
                        <div>{CVV}</div>
                    </div>
                </div>
                <img className="payment-card__img" src="/images/PaymentCard/credit_card_bg.jpeg" alt="" />
            </div>
        </div>

    </div>
  )
}

export default PaymentCard