import { validateCode } from "@/controllers/authController";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body.email;
    const code = body.code;

    validateCode(code, email);
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({ message: "Hello from Next.js API!" });
}
