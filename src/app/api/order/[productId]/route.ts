import { getOrderById } from "@/controllers/orderBuy";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  // Llamar a la función para obtener la orden por ID
  const order = await getOrderById(productId);

  // Devolver la respuesta en formato JSON
  return NextResponse.json(order);
}