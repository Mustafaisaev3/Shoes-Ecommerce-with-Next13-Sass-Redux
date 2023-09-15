'use client'

import { useState } from 'react'

interface SearchProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string
}

const Search: React.FC<SearchProps> = (props) => {
//   const [searchValue, setSearchValue] = useState('')

//   const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
//     setSearchValue(e.currentTarget.value)
//   }

  return (
    <div className="search-input">
        {/* <input type="text" placeholder={placeholder} value={searchValue} onChange={handleInput} /> */}
        <input type="text" {...props} />
    </div>
  )
}

export default Search