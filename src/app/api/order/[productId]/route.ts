import { getOrderById } from "@/controllers/orderBuy";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get('productId');

  if (!productId) {
    return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
  }

  // Llamar a la función para obtener la orden por ID
  const order = await getOrderById(productId);

  // Devolver la respuesta en formato JSON
  return NextResponse.json(order);
}