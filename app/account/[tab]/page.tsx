import getCurrentUser from '@/app/actions/getCurrentUser'
import getFavoriteProducts from '@/app/actions/getFavorites'
import getOrders from '@/app/actions/getOrders'
import React from 'react'
import AccountClient from '@/app/components/account/AccountClient'

const page = async () => {
  const currentUser = await getCurrentUser()
  const orders = await getOrders()
  const favoriteProducts = await getFavoriteProducts()

  return (
    <div className='account'>
        <div className="container">
            <div className="account__inner">
                {currentUser ? (
                    <AccountClient orders={orders} favoriteProducts={favoriteProducts} />
                ) : (
                    <div>Not Rgistered</div>
                )}
            </div>
        </div>
    </div>
  )
}

export default page