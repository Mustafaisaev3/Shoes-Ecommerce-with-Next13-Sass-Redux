import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
    orderId?: string;
}

export async function DELETE(
  request: Request, 
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { orderId } = params;

  if (!orderId || typeof orderId !== 'string') {
    throw new Error('Invalid ID');
  }

  const listing = await prisma.order.deleteMany({
    where: {
      id: orderId,
      userId: currentUser.id
    }
  });

  return NextResponse.json(listing);
}