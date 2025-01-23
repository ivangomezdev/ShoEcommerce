import { getOrderById } from "@/controllers/orderBuy";
import { NextResponse } from "next/server";

export async function GET(
  
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  const order = await getOrderById(productId);

  return NextResponse.json(order);
}
