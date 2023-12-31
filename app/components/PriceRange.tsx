'use client'

import { useEffect, useState } from 'react'
import ReactSlider from 'react-slider'
import { useDebounce } from '../hooks/useDebounce'


interface PriceRangeType {
  initialValues?: [number, number],
  min?: number,
  max?: number,
  minDistance?: number,
  getValues?: (values: number[]) => any
}

const PriceRange: React.FC<PriceRangeType> = ({initialValues, min = 0, max = 1000, minDistance, getValues}) => {
  const [values, setValues] = useState(initialValues?.length ? initialValues : [min, max])
  const debouncedValue = useDebounce(values, 1000)

  console.log(initialValues)

  useEffect(() => {
    if (getValues) {
        getValues(values)
    }
  }, [debouncedValue])

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