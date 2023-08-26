import CheckBox from "../UI/Checkbox"
import FilterBlock from "./FilterBlock"

interface CategoryFilterProps {
    getCategory: (value: any) => any
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ getCategory }) => {

  const onCategorySelect = (e: any) => {
    getCategory(e.target.value)
  }

  return (
    <FilterBlock title="Category">
      <fieldset>
        <CheckBox label={'Black'} value={'Men'} onClick={onCategorySelect} />
        <CheckBox label={'Blou'} value={'Blou'} onClick={onCategorySelect} />
        <CheckBox label={'Red'} value={'Red'} onClick={onCategorySelect} />
        <CheckBox label={'Orange'} value={'Orange'} onClick={onCategorySelect} />
      </fieldset>
    </FilterBlock>
  )
}

export default CategoryFilter