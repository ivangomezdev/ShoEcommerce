import { getProductId } from "@/controllers/orderBuy";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const orderParams = request.nextUrl.searchParams;
  const product = getProductId(orderParams);

  return NextResponse.json(product);
}
