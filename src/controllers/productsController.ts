import { Product } from "@/models/products";


export const getProductById = async (id:string) =>{
    const product = await Product.findOne({ where: { productId: id } });
   
    
    return product
}


export const getAllProds = async () =>{
    const product = await Product.findAll();
   
    
    return product
}