'use client'

import RadioBox from "../UI/Radiobox"
import FilterBlock from "./FilterBlock"

interface SizeFilterProps {
    getSize: (value: any) => any
}

const SizeFilter: React.FC<SizeFilterProps> = ({ getSize }) => {

  const onSizeSelect = (e: any) => {
    getSize(e.target.value)
  }

  return (
    <FilterBlock title="Size">
        <RadioBox name={'size'} label={'S'} value={'s'} onClick={onSizeSelect} />
        <RadioBox name={'size'} label={'M'} value={'m'} onClick={onSizeSelect} />
        <RadioBox name={'size'} label={'L'} value={'l'} onClick={onSizeSelect} />
        <RadioBox name={'size'} label={'XL'} value={'xl'} onClick={onSizeSelect} />
        <RadioBox name={'size'} label={'XXL'} value={'xxl'} onClick={onSizeSelect} />
    </FilterBlock>
  )
}

export default SizeFilter