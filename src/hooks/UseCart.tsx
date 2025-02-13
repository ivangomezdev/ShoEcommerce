import { atom } from 'jotai';
import useSWR from 'swr';
type Product = {
    productId:string,
    productName:string,
    productPrice:number,
    productImage:string,
}
export const cartAtom = atom<Product[]>([]); 


export const fetcher = async (url: string) => {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  };
  

  export function usePaymentData() {
    const { data:Paymentdata, error, isLoading } = useSWR('/api/order', fetcher);
  
    return {
      Paymentdata,
      isLoading,
      error,
    };
  }
  