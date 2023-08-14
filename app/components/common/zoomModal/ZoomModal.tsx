'use client'

import { useState } from 'react';
import { useUI } from '@/app/context/ui.context';
import { AnimatePresence } from 'framer-motion';
import { Portal } from 'react-portal'
import { MdClose } from 'react-icons/md'
import Zoom from '../../UI/Zoom';


type ZoomModalProps = {
	open?: boolean;
	children?: React.ReactNode;
	onClose: () => void;
};



const ZoomModal: React.FC<ZoomModalProps> = ({ open, onClose, children, }) => {
  const { closeProductImgZoomModal, productImgZoomData } = useUI();
  const [zoom, setZoom] = useState<boolean>(false)
  const [activeImgIndex, setActiveImgIndex] = useState<number>(0)
  const activeImg = productImgZoomData[activeImgIndex]

  const toggleZoom = () => {
    setZoom(!zoom)
  }

  return (
    <Portal>
        <AnimatePresence>
            {open && (
                <div className='zoom-modal'>
                    <div className='zoom-modal__inner'>
                        {zoom ? (
                            <Zoom
                                img={activeImg}
                                zoomScale={2}
                                width={100}
                                height={100}
                                isPercentSize={true}
                                onClick={toggleZoom}
                            />
                        ) : (
                            <div className='zoom-modal__img' onClick={toggleZoom}>
                                <img src={activeImg} />
                            </div>
                        )}
                        <div className='zoom-modal__actions'>
                            <div className='zoom-modal__close'>
                               <MdClose size={25} onClick={closeProductImgZoomModal} /> 
                            </div>
                            <div className='images__list'>
                                {productImgZoomData.map((img: string, index: number) => {
                                    return (
                                        <div className={`images__list-item ${index == activeImgIndex ? 'active' : ''}`} onClick={() => setActiveImgIndex(index)} key={index}>
                                            <img src={img} alt="" />
                                        </div>
                                    )
                                })}
                                
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    </Portal>
  )
}

export default ZoomModal