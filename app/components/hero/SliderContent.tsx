'use client'

import Button from "../UI/Button"
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'
import { title, description } from '@/utils/motion/hero-slider-variants'
 
interface SliderContentProps {
    item: any
}

const SliderContent: React.FC<SliderContentProps> = ({ item }) => {

  return (
        <div className="hero__slider-content slider-content">
            <div className="slider-content__container">
                <div className="slider-content__text">
                    <motion.div className="slider-content__title" key={item} initial="from" animate="to" exit="from" variants={description()}>
                        {item.title.first} <br/> {item.title.second}
                    </motion.div>
                    <motion.div className="slider-content__description" key={item.id} initial="from" animate="to" exit="from" variants={description()}>
                        {item.description}
                    </motion.div>
                </div>
                <div className="slider-content__btns">
                    <Button title="Add to Bag" className="btn-primary" />
                    <div className="slider-content__price">{item.price}</div>
                </div>
            </div>
            <motion.div className="slider-content__image" key={item.id} initial={{y: -50, opacity: 0}} animate={{y: 0, opacity: 1}}>
                <img src={`${item.img}`} alt='shoe' />
            </motion.div>
        </div>
    
  )
}

export default SliderContent