import { createProductPreference } from "@/lib/mercadopago";
import { NextRequest, NextResponse } from "next/server";
interface Product {
  productName: string;
  productId: string;
  productPrice: number;
}
export async function POST(request: NextRequest) {
  const { items, transactionId } = await request.json(); // Obtén los datos del cuerpo de la solicitud

  if (!items || items.length === 0) {
    return NextResponse.json({ error: "No se han enviado productos" }, { status: 400 });
  }

  // Aquí puedes manejar la creación de la compra o la preferencia de pago
  const newPref = await createProductPreference({
    items: items.map((item:Product) => ({
      productName: item.productName,
      productId: item.productId,
      productPrice: item.productPrice,
    })),
    transactionId,
  });

  console.log(newPref.init_point);
  
  // Devuelve la URL de redirección
  return NextResponse.json({ init_point: newPref.init_point });
}