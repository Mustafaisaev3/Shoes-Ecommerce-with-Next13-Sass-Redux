'use client'

import RadioBox from "../UI/Radiobox"
import FilterBlock from "./FilterBlock"

interface ColorFilterProps {
    getColor: (value: any) => any
}

const ColorFilter: React.FC<ColorFilterProps> = ({ getColor }) => {

  const onColorSelect = (e: any) => {
    getColor(e.target.value)
  }

  return (
    <FilterBlock title="Color">
        <RadioBox name="color" label={'Black'} value={'black'} onClick={onColorSelect} />
        <RadioBox name="color" label={'Blou'} value={'blou'} onClick={onColorSelect} />
        <RadioBox name="color" label={'Red'} value={'red'} onClick={onColorSelect} />
        <RadioBox name="color" label={'Orange'} value={'orange'} onClick={onColorSelect} />
    </FilterBlock>
  )
}

export default ColorFilter