import prisma from '@/app/libs/prismadb'

export default async function getSaleProducts() {
    try {
      const saleProducts = await prisma.slider.findFirst({
        where: {
          title: 'Sale Products',
        },
        include: {
            products: true
        }
      });
  
      return saleProducts;
    } catch (error: any) {
      throw new Error(error);
    }
}