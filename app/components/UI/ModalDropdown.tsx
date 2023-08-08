'use client'

import useOnClickOutside from "@/app/hooks/useOnClickOitside"
import { useEffect, useRef, useState } from "react"
import { MdArrowDropDown, MdClose } from 'react-icons/md'

interface ModalDropdownProps {
    title: any,
    activeValue?: string | any,
    getValue?: (value: any) => any,
    setValue?: (value: any) => any
    children: any
}

const ModalDropdown: React.FC<ModalDropdownProps> = ({ title, activeValue, getValue, setValue, children }) => {
//   const [value, setValue] = useState(activeValue)
  const [openDropdown, setOpenDropdown] = useState(false)
  const dropdownRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  const selectDropdownValue = (value: any) => {
    // setValue(value)
    setOpenDropdown(false)
  }

  const deleteValue = (e: any) => {
    e.stopPropagation()
    setValue && setValue(null)
  }
  
  useEffect(() => {
    getValue && getValue(activeValue)
  }, [activeValue])

  useOnClickOutside(dropdownRef, () => setOpenDropdown(false))

  return (
    <div className='modal-dropdown' ref={dropdownRef}>
        <div className="modal-dropdown__header" onClick={toggleDropdown}>
            {title} 
            {activeValue ? 
                (
                    <div className="modal-dropdown__value" onClick={deleteValue}>
                        <span>{activeValue}</span>
                        <span className="delete"><MdClose size={10} /></span>
                    </div>
                ) 
            : null}
            <MdArrowDropDown size={24} color={'black'} />
        </div>

        {openDropdown && children ? (
            <div className="modal-dropdown__body" onClick={toggleDropdown}>
                {children}
            </div>
        ) : null}
    </div>
  )
}

export default ModalDropdown