export const dynamic = 'force-dynamic'

import CollectionFilters from '@/app/components/collection/CollectionFilters'
import CollectionTopbar from '@/app/components/collection/CollectionTopbar'
import Pagination from '@/app/components/Pagination'
import ProductGrid from '@/app/components/products/ProductGrid'
import getCurrentUser from '../actions/getCurrentUser'
import getProducts from '../actions/getProducts'

const CollectionPage = async ({ searchParams }: any) => {
  const { products, pagination } = await getProducts(searchParams)
  const currentUser = await getCurrentUser()

  console.log(pagination)

  return (
    <div className='collection'>
      <div className='collection__banner'>
        <img src='/images/NIKE-BANNER-1200X300.jpg' alt='collection_banner' />
      </div>
      <div className='container'>
        <div className='collection__inner'>
          <div className='collection__content'>
            <CollectionFilters className='main' />
            <div style={{width: '100%'}}>
              <CollectionTopbar />
              <ProductGrid currentUser={currentUser} products={products}/>
              <Pagination 
                hasPrevPage = {pagination.hasPrevPage}
                hasNextPage = {pagination.hasNextPage}
                pageCount = {pagination.pageCount}
                currentPage= {pagination.currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionPage