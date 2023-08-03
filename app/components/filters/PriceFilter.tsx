'use client'

import RadioBox from "../UI/Radiobox"
import FilterBlock from "./FilterBlock"

interface PriceFilterProps {
    getPrice: (value: any) => any
}

const PriceFilter: React.FC<PriceFilterProps> = ({ getPrice }) => {

  const onPriceSelect = (e: any) => {
    getPrice(e.target.value)
  }

  return (
    <FilterBlock title="Price">
        <RadioBox label={150} name='price' value={150} onClick={onPriceSelect} />
        <RadioBox label={200} name='price' value={200} onClick={onPriceSelect} />
        <RadioBox label={300} name='price' value={300} onClick={onPriceSelect} />
        <RadioBox label={400} name='price' value={400} onClick={onPriceSelect} />
    </FilterBlock>
  )
}

export default PriceFilter