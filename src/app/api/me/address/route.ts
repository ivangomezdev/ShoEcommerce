import { changeMeAddress } from "@/controllers/meController";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request:NextRequest){
    const requestData = await request.json()
    const address = requestData.address
   changeMeAddress("1",address)
   
     return NextResponse.json(address)
}