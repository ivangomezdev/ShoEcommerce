
import { getAllProds } from "@/controllers/productsController";
import {  NextResponse } from "next/server";

export async function GET(){
  const data = await getAllProds()
    console.log(data);
    
   return NextResponse.json({data})
}