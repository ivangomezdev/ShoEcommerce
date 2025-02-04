import { validateCode } from "@/controllers/authController";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, code } = await request.json();

    const token = await validateCode(code, email);

    if (!token) {
      return NextResponse.json({ message: "Código inválido" }, { status: 400 });
    }

    return NextResponse.json({ token }); // Devuelve el token solo si es válido
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
}