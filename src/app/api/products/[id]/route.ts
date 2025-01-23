import { getProductById } from "@/controllers/productsController";
import { NextApiRequest } from "next";
import { Params } from "next/dist/server/request/params";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  id: string;
};
export async function GET(req:NextApiRequest,{ params }: { params: Params }) {
  const { id } = await params;
  console.log(id);
  


  

  /*if (!request) {
    return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
  }
*/
  //const myProduct = await getProductById(request);

 return NextResponse.json("myProduct");
}