import { Order, Slider, User } from "@prisma/client";
import { Product } from "@prisma/client"
import { Prisma } from "@prisma/client";

export type SafeUser = Omit<
    User,
    'createdAt' | 'updatedAt' | 'emailVerified'
> & {
    createdAt: string,
    updatedAt: string,
    emailVerified: string | null,
}

export type SafeProduct = Omit<Product, 'properties'> & {
    properties: {
        manufactured_sku: string,
        brand: string,
        nickname: string,
        colorway: string,
        gender: string,
        release_date: string,
    },
    color: String[],
    options?: string[],
    ID: string
}

export type SafeOrder = Omit<Order, 'customer_info' | 'shipping_info' | 'payment_info'> & {
    customer_info: {
        firstName: string,
        lustName: string,
        phone: string,
    },
    shipping_info: {
        address: string,
        postCode: string
    },
    payment_info: {
        cardNumber: string,
        cardHolderName: string,
        expirationDate: string,
        CVV: string,
    }
}

export type CartTypes = {
    items: SafeProduct[],
    isEmpty: boolean,
    totalItems: number,
    total: number,
}

type Variation = {
    id: string,
    value: string,
    meta?: string,
    attributeId: string,
  
    product: Product,
    // orderItem: ,
}


export type SliderWithProducts = Prisma.SliderGetPayload<{
    include: { products: true }
}>

// export interface Product {
//     _id: string,
//     name: string,
//     description: string,
//     images: string[],
//     price: number,
//     rating: number,
//     inStock: number,
//     salePrice?: number,
//     properties: object,
  
//     variations:        Variation[],
//     orderProducts:     OrderProduct[],
// }