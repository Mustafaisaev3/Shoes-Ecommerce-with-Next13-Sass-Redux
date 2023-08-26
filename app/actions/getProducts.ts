import prisma from "@/app/libs/prismadb";

export interface IProductParams {
    page: number,
    perPage: number,
    size?: string;
    color?: string;
    category?: string;
    minPrice?: any;
    maxPrice?: any;
  }
  

export default async function getProducts(params: IProductParams) {
  try {
    const {
        page = 1,
        perPage = 5,
        size,
        color,
        category,
        minPrice,
        maxPrice,
    } = params;

    let query: any = {};

    if (size) {
        query.size = {
            has: size
        }
    }

    if (minPrice && maxPrice) {
        query.price = {
          gte: parseInt(minPrice),
          lte: parseInt(maxPrice),
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

    let products = await prisma.product.findMany({
        where: query
    });

    

    // PAGINATION DATA

    // mocked, skipped and limited in the real app
    const start = (Number(page) - 1) * Number(perPage) // 0, 5, 10 ...
    const end = start + Number(perPage) // 5, 10, 15 ...

    const hasNextPage = end < products.length
    const hasPrevPage = start > 0
    const pageCount = Math.round(products.length / perPage)
    const currentPage = parseInt(page)

    products = products.slice(start, end)

    return {
      products,
      pagination: {
        hasPrevPage,
        hasNextPage,
        pageCount,
        currentPage,
      }
    };
  } catch (error: any) {
    console.log(error)
    throw new Error(error);
  }
}