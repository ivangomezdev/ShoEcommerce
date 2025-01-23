import { createSingleProductPreference } from "@/lib/mercadopago";
import { Payment } from "@/models/buy";
import { Product } from "@/models/products";
import { redirect } from "next/navigation";

type Purchase = {
    id: string;
    from: string;
    amount: number;
    message: string;
    date: Date;
    status: string;
  };

  
//obtener ID del product
export const getProductId = (productId: URLSearchParams) => {
  const getParamsProductId = productId.get("productId") as string;

  getProductFromDb(getParamsProductId);
};

//obtengo el producto y desmiembro sus props
const getProductFromDb = async (idProd: string) => {
  const product = await Product.findOne({ where: { productId: idProd } });
  const productName = product?.get("productName");
  const productDescription = product?.get("productDescription");
  const productId = product?.get("productId");
  const productPrice = product?.get("productPrice");

  //creo la compra
  const newPurchId = await createPurchase({
    from: productName as string,
    amount: productPrice as number,
    message: productDescription as string,
  });

  console.log(newPurchId,"purchId");
  

  //creo la pref en MP
  const newPref = await createSingleProductPreference({
    productName: productName as string,
    productDescription: productDescription as string,
    productId: productId as string,
    productPrice: productPrice as number,
    transactionId: productId as string,
  });

  redirect(newPref.init_point || "/default-redirect-url");
};

//creo la compra en la DB
export async function createPurchase(
    newPurchInput: Pick<Purchase, "from" | "amount" | "message">
  ): Promise<string> {

    await Payment.sync({ alter: true });

    const purchase = {
      ...newPurchInput,
      date: new Date(),
      status: "pending",
    };
  
    const createDbPayment = await Payment.create(purchase);
  
    await createDbPayment.save();
  
    const idPay = createDbPayment.getDataValue("id");
  
    return idPay;
  }

export const getOrderById = (id:string) =>{
const order = Payment.findOne({where: {id: id}})
return order
}