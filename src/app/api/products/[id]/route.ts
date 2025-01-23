import { getProductById } from "@/controllers/productsController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const myProduct = await getProductById(id);

  return NextResponse.json(myProduct);
}
