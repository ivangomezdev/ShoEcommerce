import { getPaymentById, WebhokPayload } from "@/lib/mercadopago";
import { confirmPurchase } from "@/lib/purchase";

export async function POST(request: Request) {
    const body: WebhokPayload = await request.json();
  
    if (body.type === "payment") {
      const mpPayment = await getPaymentById(body.data.id);

      const purchaseId = mpPayment.external_reference;
      console.log(purchaseId,"purchId");
      
      
      if (mpPayment.status === "approved") {
  
        
        const purchaseId = mpPayment.external_reference;
        console.log(purchaseId,"REF EXTERNA PARA VNCULAR CON EL USERID");
        
        await confirmPurchase(purchaseId as string);
       
        console.log(purchaseId,"purchId");
        return Response.json({ purchaseId });
      }
    }

    
  
    return Response.json({ received: true });
  }
  