import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

export async function GET(
  req: Request
) { 
  try {
    const { searchParams } = new URL(req.url);

    const category = searchParams.get("category");
    const limit = searchParams.get("limit");

    let query: any = {};

    if (category) {
        query.category = category
    }

    let products = await prisma.product.findMany({
      where: query
    });

    if (limit) {
        products = products.slice(0, parseInt(limit))
    }

    console.log(products)

    return NextResponse.json({products});
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}