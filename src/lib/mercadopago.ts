// Step 1: Import the parts of the module you want to use
import { MercadoPagoConfig, Payment, Preference } from "mercadopago";

// Step 2: Initialize the client object
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_TOKEN as string,
  options: { timeout: 5000, idempotencyKey: "abc" },
});



// Step 3: Initialize the API object
const pref = new Preference(client);

type CreatePrefOptions = {
  items:{
  productName: string;
  productId: string;
  productPrice: number;
}[],
transactionId: string;
};

export async function createProductPreference(
  options: CreatePrefOptions
) {

  return pref.create({
    body: {
      items: options.items.map(item => ({
        id: item.productId,
        title: item.productName,
        quantity: 1, // Cambia esto si necesitas manejar cantidades diferentes
        currency_id: "ARS",
        unit_price: item.productPrice,
      })),

      back_urls: {
        success: "https://shoecommerce-two.vercel.app/payment/success",
        failure: "https://shoecommerce-two.vercel.app/payment/failure",
        pending: "https://shoecommerce-two.vercel.app/payment/pending",
      },

      external_reference: options.transactionId,
    },
  });
}

export async function getPaymentById(id: string) {
  const payment = new Payment(client);
  return payment.get({ id });
}

export type WebhokPayload = {
  action: string;
  api_version: string;
  data: {
    id: string;
  };
  date_created: string;
  id: number;
  live_mode: boolean;
  type: string;
  user_id: string;
};
