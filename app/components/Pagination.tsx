'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

type PaginationTypes = {
  hasPrevPage: boolean,
  hasNextPage: boolean,
  pageCount: number,
  currentPage: number,
}

const Pagination: React.FC<PaginationTypes> = ({hasPrevPage, hasNextPage, pageCount, currentPage}) => {
  const router = useRouter()
  const params = useSearchParams()

  const goToPage = (page: number) => {
    let currentQuery = {}

    if (params) {
        currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
        ...currentQuery,
        page
    }

    const url = qs.stringifyUrl({
        url: '/collections/',
        query: updatedQuery
    }, { skipNull: true });
  
    router.push(url);
  }

  return (
    <>
      {pageCount > 1 ? (
        <div className='pagination-wrapper'>
            <nav className='pagination'>
                <ul className='pagination__list'>
                    {hasPrevPage && (
                      <>
                        <li onClick={() => goToPage(currentPage - 1)}>
                            <span className='pagination__item'>
                              <FiChevronLeft size={20} />
                            </span>
                        </li>
                        <li onClick={() => goToPage(currentPage - 1)}>
                            <span className='pagination__item'>{currentPage - 1}</span>
                        </li>
                      </>
                    )}
                    <li>
                        <span className='pagination__item active'>{currentPage}</span>
                    </li>
                    {hasNextPage && (
                      <>
                        <li onClick={() => goToPage(currentPage + 1)}>
                          <span className='pagination__item'>{currentPage + 1}</span>
                        </li>
                        <li onClick={() => goToPage(currentPage + 1)}>
                          <span className='pagination__item'>
                            <FiChevronRight size={20} />
                          </span>
                        </li>
                      </>
                    )}

                </ul>
            </nav>
        </div>
      ) : null}
    </>
    
  )
}

export default Pagination