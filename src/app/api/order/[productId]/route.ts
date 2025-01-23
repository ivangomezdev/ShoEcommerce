import { getOrderById } from "@/controllers/orderBuy";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest, // Primer argumento: la solicitud (NextRequest)
  { params }: { params: { productId: string } } // Segundo argumento: contexto con params
) {
  console.log(request);
  
  const { productId } = params;

  // Llamar a la función para obtener la orden por ID
  const order = await getOrderById(productId);

  // Devolver la respuesta en formato JSON
  return NextResponse.json(order);
}