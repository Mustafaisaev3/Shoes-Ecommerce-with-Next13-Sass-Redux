

import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import getFavoriteProducts from '../actions/getFavorites'
import getOrders from '../actions/getOrders'
import AccountClient from '../components/account/AccountClient'

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