import { getPaymentById, WebhokPayload } from "@/lib/mercadopago";
import { confirmPurchase } from "@/lib/purchase";

export async function POST(request: Request) {
    const body: WebhokPayload = await request.json();
  
    if (body.type === "payment") {
      const mpPayment = await getPaymentById(body.data.id);


      
      if (mpPayment.status === "approved") {
  
        
        const purchaseId = mpPayment.external_reference;
        console.log(purchaseId,"REF EXTERNA PARA VNCULAR CON EL USERID");
        
        await confirmPurchase(purchaseId as string);
      }
    }

    
  
    return Response.json({ received: true });
  }
  