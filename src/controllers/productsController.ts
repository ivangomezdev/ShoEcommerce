import { Product } from "@/models/products";


export const getProductById = async (id:string) =>{
    const product = await Product.findOne({ where: { id } });

    return product
}