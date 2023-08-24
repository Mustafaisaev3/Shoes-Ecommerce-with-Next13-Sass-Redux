import prisma from "@/app/libs/prismadb";

export interface IProductParams {
    size?: string;
    color?: string;
    category?: string;
  }
  

export default async function getProducts(params: IProductParams) {
  try {
    const {
        size,
        color,
        category
    } = params;

    let query: any = {};

    if (size) {
        query.size = size;
    }

    const products = await prisma.product.findMany();

    console.log(products)

    return products;
  } catch (error: any) {
    console.log(error)
    throw new Error(error);
  }
}