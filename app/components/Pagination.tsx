import React from 'react'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

const Pagination = () => {
  return (
    <div className='pagination-wrapper'>
        <nav className='pagination'>
            <ul className='pagination__list'>
                <li>
                    <span className='pagination__item'>
                      <FiChevronLeft size={20} />
                    </span>
                </li>
                <li>
                    <span className='pagination__item active'>1</span>
                </li>
                <li>
                    <span className='pagination__item'>2</span>
                </li>
                <li>
                    <span className='pagination__item'>3</span>
                </li>
                <span className='pagination__item'>
                  <FiChevronRight size={20} />
                </span>
            </ul>
        </nav>
    </div>
  )
}

export default Pagination