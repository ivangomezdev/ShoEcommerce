import { changeMeData } from "@/controllers/meController";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  const userId = request.headers.get("x-user-id") as string;
  const body = await request.json();
  changeMeData(userId, body);

  return NextResponse.json({ dataModificada: body });
}
