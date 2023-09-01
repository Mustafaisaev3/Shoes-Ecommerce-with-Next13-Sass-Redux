import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";


export default async function getOrders() {
    try {
        const currentUser = await  getCurrentUser()

        if(!currentUser){
            return null
        }

        const orders = await prisma.order.findMany({
            where: {
                userId: currentUser.id
            }
        })

        return orders
    } catch (error: any) {
        console.log(error)
        throw new Error(error);
    }
}