
import { NextRequest, NextResponse } from "next/server";

type Params = {
  id: string;
};
export async function GET(req:NextRequest,{ params }: { params: Params }) {
  const { id } = await params;
  console.log(id);
  


  

  /*if (!request) {
    return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
  }
*/
  //const myProduct = await getProductById(request);

 return NextResponse.json("myProduct");
}