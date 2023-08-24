import CollectionFilters from '@/app/components/collection/CollectionFilters'
import CollectionTopbar from '@/app/components/collection/CollectionTopbar'
import Pagination from '@/app/components/Pagination'
import ProductGrid from '@/app/components/products/ProductGrid'
import getProducts from '../actions/getProducts'

const CollectionPage = async ({ searchParams }: any) => {
  const products = await getProducts(searchParams)

  return (
    <div className='collection'>
      <div className='collection__banner'>
        <img src='/images/NIKE-BANNER-1200X300.jpg' alt='collection_banner' />
      </div>
      <div className='container'>
        <div className='collection__inner'>
          <div className='collection__content'>
            <CollectionFilters />
            <div style={{width: '100%'}}>
              <CollectionTopbar />
              <ProductGrid products={products}/>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionPage