import { getProductById } from "@/controllers/productsController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
  }

  const myProduct = await getProductById(id);

  return NextResponse.json(myProduct);
}