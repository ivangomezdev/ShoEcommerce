import { getOrderById } from "@/controllers/orderBuy";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { productId: string } }
) {
  console.log(request);
  
  const { productId } = context.params;

  // Call the function to get the order by ID
  const order = await getOrderById(productId);

  // Return the response in JSON format
  return NextResponse.json(order);
}