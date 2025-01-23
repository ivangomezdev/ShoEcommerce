import { searchData } from "@/controllers/searchController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const data = searchData(searchParams as URLSearchParams)

    
   return NextResponse.json({data})
    
}