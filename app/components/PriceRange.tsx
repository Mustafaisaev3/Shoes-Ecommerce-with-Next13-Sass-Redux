'use client'

import { useEffect, useState } from 'react'
import ReactSlider from 'react-slider'


interface PriceRangeType {
    min?: number,
    max?: number,
    minDistance?: number,
    getValues?: (values: number[]) => any
}

const PriceRange: React.FC<PriceRangeType> = ({min = 0, max = 1000, minDistance, getValues}) => {
  const [values, setValues] = useState([min, max])

  useEffect(() => {
    if (getValues) {
        getValues(values)
    }
  }, [values])

  return (
    <div className='price-range__container'>
        <div className='price-range__values'>
            <div className='value'>{values[0]} $</div>
            <div className='dash'>-</div>
            <div className='value'>{values[1]} $</div>
        </div>
        <ReactSlider 
            className='price-range' 
            value={values} 
            min={min} 
            max={max}
            minDistance={minDistance} 
            onChange={setValues} 
        />
    </div>
  )
}

export default PriceRange