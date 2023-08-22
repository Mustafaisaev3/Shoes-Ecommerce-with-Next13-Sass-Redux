'use client'

import { Portal } from "react-portal"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import { useRef } from "react"
import { fadeInOut } from "@/utils/motion/fade-in-out"
import { fromLeft } from "@/utils/motion/from-left"
import { fromTop } from "@/utils/motion/from-top"
import { useUI } from "@/app/context/ui.context"
import useOnClickOutside from "@/app/hooks/useOnClickOitside"
import { MdClose } from 'react-icons/md'

type ModalTypes = {
	open?: boolean;
	children?: React.ReactNode;
	onClose: () => void;
}

const Modal: React.FC<ModalTypes> = ({
    children,
	open,
	onClose,
}) => {
  const modalRootRef = useRef(null)
  const modalInnerRef = useRef(null)

  const { closeModal } = useUI();
  useOnClickOutside(modalInnerRef, () => closeModal());

  return (
    <Portal>
        <AnimatePresence>
            {open ? (
                <motion.div 
                ref={modalRootRef}
                key={'modal-wrapper'}
                initial="from"
                animate="to"
                exit="from"
                variants={fadeInOut(0.4)}  
                className="modal-wrapper"
              >
                  <motion.div
                    ref={modalInnerRef}
                    key={'modal'}
                    initial="from"
                    animate="to"
                    exit="from"
                    variants={fromTop(0.4)}  
                    className="modal"
                  >
                    <div className="modal__close">
                        <MdClose size={25} onClick={closeModal} />
                    </div>
                    {children}
                  </motion.div>
  
              </motion.div>
            ) : null}      
        </AnimatePresence>
    </Portal>
  )
}

export default Modal