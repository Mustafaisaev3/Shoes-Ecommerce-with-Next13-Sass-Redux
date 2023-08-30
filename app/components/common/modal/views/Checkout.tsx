'use client'

import ModalHeading from "@/app/components/ModalHeading"
import PaymentCard from "@/app/components/PaymentCard"
import Button from "@/app/components/UI/Button"
import Input from "@/app/components/UI/Input"
import { useMemo, useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

enum STEPS {
    CUSTOMER_INFO = 0,
    SHIPPING_INFO = 1,
    PAYMENT = 2,
}

interface ICheckoutFormValue {
    firstName: string;
    lustName: string;
    phone?: string | undefined;
    cardNumber: string;
    cardHolderName: string;
    expirationDate: string;
    CVV: string;
    address: string,
    postCode: string,
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
    firstName: yup.string().min(3).max(80).required('First Name is required'),
    lustName: yup.string().min(8).max(32).required('Lust Name is required'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    cardNumber: yup.string().min(16).max(16).required(),
    cardHolderName: yup.string().min(2).max(80).required('Card Holder Name is required'),
    expirationDate: yup.string().min(4).max(4).required('Expiration Date is required'),
    CVV: yup.string().min(3).max(3).required('CVV code is required'),
    address: yup.string().min(2).max(80).required('Card Holder Name is required'),
    postCode: yup.string().min(2).max(80).required('Card Holder Name is required'),
});

const Checkout = () => {
    const [step, setStep] = useState<STEPS>(STEPS.CUSTOMER_INFO)
    const [rotateCard, setRotateCard] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: {
            errors,
        },
    } = useForm<ICheckoutFormValue>({
        defaultValues: {
            firstName: '',
            lustName: '',
            phone: '',
            cardNumber: '**** **** **** ****',
            cardHolderName: '',
            expirationDate: '',
            CVV: '***',
            address: '',
            postCode: ''
        },
        resolver: yupResolver(schema),
    })

    const firstName = watch('firstName');
    const lustName = watch('lustName');
    const phone = watch('phone');
    const cardNumber = watch('cardNumber');
    const cardHolderName = watch('cardHolderName');
    const expirationDate = watch('expirationDate');
    const CVV = watch('CVV');
    const address = watch('address');
    const postCode = watch('postCode');

    const onBack = () => {
        if (step === 0) {
            return
        }
        setStep(value => value - 1)
    }
    
    const onNext = () => {
        if (step === 2) {
            return
        }
        setStep(value => value + 1)
    }

    // Action Labels
    const actionLabel = useMemo(() => {
        if (step === STEPS.PAYMENT) {
            return 'Checkout'
        }
    
        return 'Next'
      }, [step])
    
    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CUSTOMER_INFO) {
            return undefined
        }

        return 'Back'
    }, [step])

    let bodyContent

    const onSubmitHandler = (data: any) => {
        console.log({ data });
    };
    
    const func = () => {
      console.log(errors);

    }

    if (step === STEPS.CUSTOMER_INFO) {
        bodyContent = (
          <div className="customer-info">
            <ModalHeading 
                title="Customer info" 
                subtitle="Set customer information" 
                center 
            />

            <div style={{width: '100%',display: 'flex', flexDirection: 'column', gap: '20px', padding: '30px 0'}} >
                <Input label="First Name" id="firstName" register={register} errors={errors}/>
                <Input label="Lust name" id="lustName" register={register} errors={errors}/>
                <Input label="Phone" id="phone" register={register} errors={errors}/>
            </div>

            <Button className="btn btn-main" title={'card'} type='submit' width='100%' onClick={handleSubmit(onSubmitHandler)}/>
            <Button className="btn btn-main" title={'errors'} type='submit' width='100%' onClick={func}/>
            <div className="checkout__actions-container">
                {secondaryActionLabel ? (
                    <Button className="btn btn-main" title={secondaryActionLabel} width='100%' onClick={onBack}/>

                ) : null}
                <Button 
                    className="btn btn-main" 
                    title={actionLabel}  
                    width='100%' 
                    onClick={onNext}
                    disabled={(!firstName || !lustName || !phone) ? true : false}
                />
            </div>

          </div>
        );
    }

    if (step === STEPS.SHIPPING_INFO) {
        bodyContent = (
          <div className="shipping-info">
            <ModalHeading 
                title="Chipping" 
                subtitle="Set Chipping information" 
                center 
            />

            <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', padding: '30px 0'}} >
                <Input label="City/Town" id="address" register={register} errors={errors}/>
                <Input label="Postcode" id="postCode" register={register} errors={errors}/>
            </div>  
            <div className="checkout__actions-container">
                {secondaryActionLabel ? (
                    <Button className="btn btn-main" title={secondaryActionLabel} width='100%' onClick={onBack} />

                ) : null}
                <Button 
                    className="btn btn-main" 
                    title={actionLabel}  
                    width='100%' 
                    onClick={onNext}
                    disabled={(!address || !postCode) ? true : false}
                />
            </div>

          </div>
        );
    }

    if (step === STEPS.PAYMENT) {
        bodyContent = (
          <div className="payment-info">
            <ModalHeading 
                title="Paymant" 
                subtitle="Set Paymant information" 
                center 
            />
            <PaymentCard isRotate={rotateCard} cardNumber={cardNumber} cardHolderName={cardHolderName} CVV={CVV} expityDate={expirationDate} />
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', padding: '30px 0'}} >
                <Input label="Card Number" id="cardNumber" register={register} errors={errors} maxLength={16}/>
                <Input label="Card Holder Name" id="cardHolderName" register={register} errors={errors}/>
            </div>  
            <div style={{display: 'flex', gap: '20px'}} >
                <Input label="Expity Date" id="expirationDate" register={register} errors={errors} maxLength={4} />
                <Input label="CVV" id="CVV" register={register} errors={errors} maxLength={3} onFocus={() => setRotateCard(true)} onBlur ={() => setRotateCard(false)} />
            </div>  
            <div className="checkout__actions-container" >
                {secondaryActionLabel ? (
                    <Button className="btn btn-main" title={secondaryActionLabel} width='100%' onClick={onBack} />

                ) : null}
                <Button 
                    className="btn btn-main" 
                    title={actionLabel}  
                    width='100%' 
                    onClick={onNext}
                    disabled={(!cardNumber || !cardHolderName || !expirationDate || !CVV) ? true : false}
                />
            </div>

          </div>
        );
    }

  return (
    <div className="checkout">
        <div className="checkout__header">
            Checkout
        </div>
        <div className="checkout__content">
            <div className="checkout__body">
                {bodyContent}
            </div>
        </div>
    </div>
  )
}

export default Checkout