import prisma from '@/app/libs/prismadb'

export default async function getPopularProducts() {
    try {
      const popularProducts = await prisma.slider.findFirst({
        where: {
          title: 'Popular Products',
        },
        include: {
            products: true
        }
      });
  
      return popularProducts;
    } catch (error: any) {
      throw new Error(error);
    }
}