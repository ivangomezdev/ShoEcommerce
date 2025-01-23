import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request:NextRequest){
    const address = request.body
     return NextResponse.json(address)
}