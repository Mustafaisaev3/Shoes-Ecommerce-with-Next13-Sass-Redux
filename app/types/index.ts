import { User } from "@prisma/client";
import { Product } from "@prisma/client"

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