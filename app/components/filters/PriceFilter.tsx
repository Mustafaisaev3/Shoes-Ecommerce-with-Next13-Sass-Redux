'use client'

import PriceRange from "../PriceRange"
import FilterBlock from "./FilterBlock"

interface PriceFilterProps {
    getPrice: (value: any) => any
}

const PriceFilter: React.FC<PriceFilterProps> = ({ getPrice }) => {

  return (
    <FilterBlock title="Price">
        <PriceRange min={0} max={2000} minDistance={200} getValues={getPrice}/>
    </FilterBlock>
  )
}

export default PriceFilter