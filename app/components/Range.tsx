'use client'

import { useEffect, useRef, useState } from "react"

const Range = () => {
  const gap = 200
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(500)
  const progressRef = useRef<any>(null)

  useEffect(() => {
    if (max - min < gap) {
        setMin(max - gap)
        setMax(min + gap)
    } else {
        if (progressRef.current) {
            progressRef.current.style.left =  `${(min / 1000) * 100}%`
            progressRef.current.style.right =  `${100 - (max / 1000) * 100}%`
        }
    }
  }, [min, max])


  return (
    <div className="price-range">
        <div className="min-value numberVal">
            <input type="number" min={0} max={1000} value={min} disabled />
        </div>
        <div className="range-slider">
            <div className="progress" ref={progressRef}></div>
            <input type="range" className="range-min" min={0} max={1000} value={min} onChange={(event: any) => setMin(event.target.valueAsNumber)} />
            <input type="range" className="range-max" min={0} max={1000} value={max} onChange={(event: any) => setMax(event.target.valueAsNumber)} />
        </div>
        <div className="max-value numberVal">
            <input type="number" min={0} max={1000} value={max} disabled />
        </div>
    </div>
  )
}

export default Range