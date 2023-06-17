'use client'

import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

interface SearchProps {

}

const Search: React.FC<SearchProps> = () => {
  const [searchValue, setSearchValue] = useState()

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  return (
    <div className="search">
        <input type="text" value={searchValue} onChange={handleInput} />
        <button>
            <FiSearch size={15} />
        </button>
    </div>
  )
}

export default Search