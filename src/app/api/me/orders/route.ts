import { getMePayments } from "@/controllers/meController";
import { NextResponse } from "next/server";


export async function GET() {
  const payments = await getMePayments();
  return NextResponse.json(payments);
}

