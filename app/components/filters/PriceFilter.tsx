'use client'

import PriceRange from "../PriceRange"
import FilterBlock from "./FilterBlock"

interface PriceFilterProps {
  values?: [number, number]
  getPrice: (value: any) => any
}

const PriceFilter: React.FC<PriceFilterProps> = ({ values, getPrice }) => {
  return (
    <FilterBlock title="Price">
        <PriceRange initialValues={values} min={0} max={2000} minDistance={200} getValues={getPrice}/>
    </FilterBlock>
  )
}

export default PriceFilter