'use client'

import { SafeOrder } from "@/app/types"
import { Order } from "@prisma/client"
import OrderItem from "./OrderItem"

type OrdersTypes = {
    orders: SafeOrder[] | null
}

const Orders: React.FC<OrdersTypes> = ({ orders }) => {
  return (
    <div className="orders">
        <h2 className="title">Orders</h2>
        <div className="orders-grid">
            {orders ? orders.map((order: SafeOrder) => <OrderItem data={order} />) : null}
            {/* <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem /> */}
        </div>
    </div>
  )
}

export default Orders