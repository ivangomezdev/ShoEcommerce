
import { getProductById } from "@/controllers/productsController";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest) {
console.log(req.url);
const pathname = req.url;
const segments = pathname.split('/');
const id = segments[segments.length - 1];

const myProduct = await getProductById(id);

 return NextResponse.json(myProduct);
}