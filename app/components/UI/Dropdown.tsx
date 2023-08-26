'use client'

import useOnClickOutside from "@/app/hooks/useOnClickOitside"
import { useEffect, useRef, useState } from "react"
import { MdArrowDropDown } from 'react-icons/md'

type DropdownValue = {
    value: string | number, 
    label: string | number
}

interface DropdownProps {
    options: DropdownValue[],
    getValue?: (value: number | string) => any
}

const Dropdown: React.FC<DropdownProps> = ({ options, getValue }) => {
  const [value, setValue] = useState(options[0])
  const [openDropdown, setOpenDropdown] = useState(false)
  const dropdownRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  const selectDropdownValue = (value: any) => {
    setValue(value)
    setOpenDropdown(false)
  }
  
  useEffect(() => {
    getValue && getValue(value.value)
  }, [value])

  useOnClickOutside(dropdownRef, () => setOpenDropdown(false))

  return (
    <div className='dropdown' ref={dropdownRef}>
        <div className="dropdown__header" onClick={toggleDropdown}>{value.label} <MdArrowDropDown size={24} color={'black'} /></div>

        {openDropdown ? (
            <div className="dropdown__body">
                <ul className="dropdown__list">
                    {options && options.map((option) => {
                        return (
                            <li className="dropdown__list-item" onClick={() => selectDropdownValue(option)}>
                                {option.label} 
                            </li>
                        )
                    })}
                </ul>
            </div>
        ) : null}
    </div>
  )
}

export default Dropdown