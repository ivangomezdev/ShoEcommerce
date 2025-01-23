import { getProductById } from "@/controllers/productsController";
import {  NextResponse } from "next/server";

export async function GET(
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const myProduct = await getProductById(id);

  return NextResponse.json(myProduct);
}
