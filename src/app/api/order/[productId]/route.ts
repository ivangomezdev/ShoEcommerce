import { getOrderById } from "@/controllers/orderBuy";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  const order = await getOrderById(productId);

  return NextResponse.json(order);
}
