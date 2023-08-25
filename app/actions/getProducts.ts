import prisma from "@/app/libs/prismadb";

export interface IProductParams {
    size?: string;
    color?: string;
    category?: string;
    price?: any;
  }
  

export default async function getProducts(params: IProductParams) {
  try {
    const {
        size,
        color,
        category,
        price
    } = params;

    let query: any = {};

    if (size) {
        query.size = {
            has: size
        }
    }

    if (color) {
        query.color = {
            has: color
        }
    }

    if (category) {
        query.category = category;
    }

    const products = await prisma.product.findMany({
        where: query
    });

    console.log(products)

    return products;
  } catch (error: any) {
    console.log(error)
    throw new Error(error);
  }
}