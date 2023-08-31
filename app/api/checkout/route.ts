import { Order } from "@prisma/client"
import prisma from '@/app/libs/prismadb'
import { NextResponse } from "next/server"
import getCurrentUser from "@/app/actions/getCurrentUser"

export async function POST (request: Request) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return NextResponse.error()
    }
    const body = await request.json()

    const {
        id,
        address,
        status,
        customer_info,
        shipping_info,
        payment_info,
        cart
    } = body

    const order = await prisma.order.create({
        data: {
            id,
            userId : currentUser.id,
            address,
            status,
            customer_info,
            shipping_info,
            payment_info,
            cart
        }
    })

    return NextResponse.json(order)
}