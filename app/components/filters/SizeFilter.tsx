'use client'

import RadioBox from "../UI/Radiobox"
import FilterBlock from "./FilterBlock"

interface SizeFilterProps {
  value?: string | (string | null)[] | null,
  getSize: (value: any) => any
}

const SizeFilter: React.FC<SizeFilterProps> = ({ value, getSize }) => {

  const onSizeSelect = (e: any) => {
    getSize(e.target.value)
  }

  return (
    <FilterBlock title="Size">
        <RadioBox name={'size'} label={'S'} value={'s'} onClick={onSizeSelect} checked={ value==='s' } />
        <RadioBox name={'size'} label={'M'} value={'m'} onClick={onSizeSelect} checked={ value==='m' } />
        <RadioBox name={'size'} label={'L'} value={'l'} onClick={onSizeSelect} checked={ value==='l' } />
        <RadioBox name={'size'} label={'XL'} value={'xl'} onClick={onSizeSelect} checked={ value==='xl' }  />
        <RadioBox name={'size'} label={'XXL'} value={'xxl'} onClick={onSizeSelect} checked={ value==='xxl' } />
    </FilterBlock>
  )
}

export default SizeFilter