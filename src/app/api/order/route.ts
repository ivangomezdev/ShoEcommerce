import { verifyToken } from "@/lib/jsonwebtoken";
import { createProductPreference } from "@/lib/mercadopago";
import { Payment } from "@/models/buy";
import { JWTPayload } from "jose";
import { NextRequest, NextResponse } from "next/server";
interface Product {
  productName: string;
  productId: string;
  productPrice: number;
}
export async function POST(request: NextRequest) {
  const { items, transactionId, cookies } = await request.json();

  //sacamos el costo total
  const totalPrice = items.reduce(
    (sum: number, item: Product) => sum + item.productPrice,
    0
  );
  //creamos la fecha del paymentInit
  const paymentDate = new Date();
  //verificamos el token y devolvemos el USERID
  const token = cookies.token.token;

  const verifiedToken = (await verifyToken(token)) as JWTPayload;
  const userid = await JSON.stringify(verifiedToken.userId);

  if (!items || items.length === 0) {
    return NextResponse.json(
      { error: "No se han enviado productos" },
      { status: 400 }
    );
  }

  // Crear pago
  const newPref = await createProductPreference({
    items: items.map((item: Product) => ({
      productName: item.productName,
      productId: item.productId,
      productPrice: item.productPrice,
    })),
    transactionId,
  });

  await Payment.sync();
  //Adjuntar pago en la DB
  Payment.create({
    userId: userid,
    amount: totalPrice,
    date: paymentDate,
    status: "pending",
    transactionId: transactionId,
  });

  // Devuelve la URL de redirección
  return NextResponse.json({ init_point: newPref.init_point });
}

export async function GET(request: NextRequest) {
  //busca la ref en los params
  const referer = request.headers.get("referer");

  if (!referer) {
    return NextResponse.json({ error: "No referer found" }, { status: 400 });
  }
  //"parseamos" la URL para acceder a sus searchParams y asi buscar el er
  const url = new URL(referer);
  const searchParams = url.searchParams;
  const externalReference = searchParams.get("external_reference");

  // busco el pago en la DB
  const paymentData = await Payment.findOne({
    where: { transactionId: externalReference },
  });

  return NextResponse.json({ paymentData });
}
