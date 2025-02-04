import { atom } from 'jotai';
type Product = {
    productId:string,
    productName:string,
    productPrice:number,
    productImage:string,
}
export const cartAtom = atom<Product[]>([]); 
