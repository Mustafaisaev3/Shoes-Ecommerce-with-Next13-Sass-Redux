import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

export async function GET(
  req: Request
) { 
  try {
    const { searchParams } = new URL(req.url);

    const q = searchParams.get("q");

    console.log(q)
    
    if (!q) {
        return NextResponse.json({products: []});
    }

    let products = await prisma.product.findMany({
      where: {
        name: {
            contains: q,
            mode: 'insensitive'
        }
      }
    });

    return NextResponse.json({products});
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}