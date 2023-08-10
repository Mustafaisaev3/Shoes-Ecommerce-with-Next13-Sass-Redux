'use client'

import { useRef } from 'react'
 
interface ZoomProps {
    img: string,
    zoomScale: number,
    width: number,
    height: number,
    isPercentSize: boolean,
    onClick: () => any
}

const Zoom: React.FC<ZoomProps> = ({ img, zoomScale, width, height, isPercentSize, onClick }) => {
  const magnifyingArea = useRef() as React.MutableRefObject<HTMLDivElement>
  const magnifyingImg = useRef() as React.MutableRefObject<HTMLImageElement>

  const onMagnifyungMouseMove = (e: any) => {
    let clientX = e.clientX - magnifyingArea.current.offsetLeft
    let clientY = e.clientY - magnifyingArea.current.offsetTop

    const mWidth = magnifyingArea.current.offsetWidth
    const mHeight = magnifyingArea.current.offsetHeight

    clientX = clientX / mWidth * 100
    clientY = clientY / mHeight * 100

    magnifyingImg.current.style.transform = `translate(-${clientX}%, -${clientY}%) scale(${zoomScale})`
  }

  const onMagnifyungMouseLeave = (e: any) => {
    magnifyingImg.current.style.transform = `translate(-50%, -50%) scale(1)`
  }


  return (
    <div 
      className="zoom__magnifying-area"
      style={{
        width: `${width}${isPercentSize ? '%' : 'px'}`, 
        height: `${height}${isPercentSize ? '%' : 'px'}`
      }}
      ref={magnifyingArea}
      onMouseMove={onMagnifyungMouseMove}
      onMouseLeave={onMagnifyungMouseLeave}
      onClick={onClick}
    >
        <img 
          className="zoom__magnifying-img"
          src={img}
          ref={magnifyingImg}
        />
    </div>
  )
}

export default Zoom