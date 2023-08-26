'use client'

interface FilterBlockProps {
    title: string,
    children?: React.ReactElement[] | React.ReactElement
}

const FilterBlock: React.FC<FilterBlockProps> = ({title, children}) => {
  return (
    <fieldset className="filter-block">
        <div className="filter-block__title">
            {title}
        </div>
        <div className="filter-block__inner">
            {children}
        </div>
    </fieldset>
  )
}

export default FilterBlock