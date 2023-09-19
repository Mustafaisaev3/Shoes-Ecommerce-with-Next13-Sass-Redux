'use client'

import RadioBox from "../UI/Radiobox"
import FilterBlock from "./FilterBlock"

interface ColorFilterProps {
  value?: string | (string | null)[] | null,
  getColor: (value: any) => any
}

const ColorFilter: React.FC<ColorFilterProps> = ({ value, getColor }) => {

  const onColorSelect = (e: any) => {
    getColor(e.target.value)
  }

  return (
    <FilterBlock title="Color">
        <RadioBox name="color" label={'Black'} value={'black'} onClick={onColorSelect} checked={ value==='black' } className='hello'/>
        <RadioBox name="color" label={'Blou'} value={'blou'} onClick={onColorSelect} checked={ value==='blou' } />
        <RadioBox name="color" label={'Red'} value={'red'} onClick={onColorSelect} checked={ value==='red' } />
        <RadioBox name="color" label={'Orange'} value={'orange'} onClick={onColorSelect} checked={ value==='orange' } />
    </FilterBlock>
  )
}

export default ColorFilter