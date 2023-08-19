import { useUI } from '@/app/context/ui.context'
import { fadeInOut } from '@/utils/motion/fade-in-out'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import Scrollbar from '../common/Scrollbar'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'


const Cart = () => {
  const isEmpty = false
  const { closeCart } = useUI()

  return (
    <div className='cart'>
        <div className='cart__header'>
            Cart
        </div>

        <div className='cart__items'>
            {!isEmpty ? (
                <Scrollbar className="cart-scrollbar w-full flex-grow">
                    <div className="cart-items__list w-full px-5 md:px-7">
                        {/* {items?.map((item) => (
                            <CartItem item={item} key={item.id} />
                            ))} */}
                        <CartItem item={{}} key={Math.random()} />
                        <CartItem item={{}} key={Math.random()} />
                        <CartItem item={{}} key={Math.random()} />
                        <CartItem item={{}} key={Math.random()} />
                        <CartItem item={{}} key={Math.random()} />
                        <CartItem item={{}} key={Math.random()} />
                        <CartItem item={{}} key={Math.random()} />
                    </div>
                </Scrollbar>
            ) : (
                <motion.div
                    layout
                    initial="from"
                    animate="to"
                    exit="from"
                    variants={fadeInOut(0.25)}
                    className="px-5 md:px-7 pt-8 pb-5 flex justify-center flex-col items-center"
                >
                    <EmptyCart />
                    <h3 className="text-lg text-heading font-bold pt-8">
                        Cart is Empty!
                    </h3>
                </motion.div>
            )}
        </div>

        <div
            className="cart__footer flex flex-col px-5 md:px-7 pt-2 pb-5 md:pb-7"
            onClick={closeCart}
        >
            <div
                // href={isEmpty === false ? '/checkout' : "/"}
                className={"cart__checkout"}
            >
                <div>
                    Proceed To Checkout
                </div>
                <span>
                    $588.00
                </span>
            </div>
        </div>
    </div>
  )
}

export default Cart