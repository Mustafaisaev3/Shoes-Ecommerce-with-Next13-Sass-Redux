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
import Button from "../../UI/Button"


const ConfirmationModal = () => {
  const modalRootRef = useRef(null)
  const modalInnerRef = useRef(null)

  const { displayConfirmationModal, closeConfirmationModal, modalConfirmationData } = useUI();
  useOnClickOutside(modalInnerRef, () => closeConfirmationModal());

  console.log(modalConfirmationData)

  const handleAction = () => {
    modalConfirmationData.action()
    closeConfirmationModal()
  }

  return (
    <Portal>
        <AnimatePresence>
            {displayConfirmationModal ? (
                <motion.div 
                ref={modalRootRef}
                key={'confirmation-modal-wrapper'}
                initial="from"
                animate="to"
                exit="from"
                variants={fadeInOut(0.4)}  
                className="confirmation-modal-wrapper"
              >
                  <motion.div
                    ref={modalInnerRef}
                    key={'modal'}
                    initial="from"
                    animate="to"
                    exit="from"
                    variants={fromTop(0.4)}  
                    className="confirmation-modal"
                  >
                    <div className="confirmation-modal__close">
                        <MdClose size={25} onClick={closeConfirmationModal} />
                    </div>
                    <div className="confirmation-modal__container">
                        <div>
                            <h2>{modalConfirmationData.question}</h2>
                        </div>
                        <div className="actions">
                            <Button className="btn__danger" title="Reject" width="100%" onClick={closeConfirmationModal}></Button>
                            <Button className="btn__success" title="Confirm" width="100%" onClick={handleAction}></Button>
                        </div>
                    </div>
                    
                  </motion.div>
  
              </motion.div>
            ) : null}      
        </AnimatePresence>
    </Portal>
  )
}

export default ConfirmationModal