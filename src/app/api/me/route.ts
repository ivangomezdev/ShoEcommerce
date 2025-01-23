
import { changeMeData, meData } from "@/controllers/meController";
import { NextRequest, NextResponse } from "next/server";



export async function GET() {
    meData("1")
    
  return NextResponse.json({ data: "ok" });
}


export async function PATCH(request: NextRequest) {

  const body = await request.json();
    changeMeData("1",body)
    
    return NextResponse.json({ dataModificada: body});


  }
