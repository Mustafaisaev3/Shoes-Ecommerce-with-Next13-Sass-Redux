import prisma from '@/app/libs/prismadb'

export default async function getRelatedProducts() {
    try {
      const relatedProducts = await prisma.slider.findFirst({
        where: {
          title: 'Related Products',
        },
        include: {
            products: true
        }
      });
  
      return relatedProducts;
    } catch (error: any) {
      throw new Error(error);
    }
}