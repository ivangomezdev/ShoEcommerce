import { fetcher } from "@/hooks/UseAllProds";
import React from "react";
import "./productCard.css";
import useSWR from "swr";
import { ShoppingCart02Icon } from "./ui/icons/Header";
import Link from "next/link";
import Loading from "./Loading";

type ProductType = {
  productImage: string;
  productPrice: string;
  productName: string;
  productStock:string;
  productId:string;
};

const ProductCard = () => {
  const { data, isLoading } = useSWR("/api/products/all", fetcher, {
    fallbackData: [],
    revalidateOnFocus: false, // Desactiva la revalidación al volver a la página
    revalidateOnReconnect: false, // Desactiva la revalidación al reconectar
  });

  const allProds = Array.isArray(data?.data) ? data.data : [];
  const onlyFourProds = allProds.slice(0, 4) as ProductType[];

  const MapFourProducts = onlyFourProds.map((i, index) => {
    return (
       <> 
        {isLoading == true ? <Loading/> : 
      <div className="productCard__card" key={index}>
        <img src={i.productImage} alt="" />
        <div className="productCard__textcont">
          <p>${i.productPrice}</p>
          <h5>{i.productName}</h5>
          <p>En Stock: {i.productStock}</p>
        </div>
       <Link href={`/products/${i.productId}`}>
        <ShoppingCart02Icon/>
        </Link> 
        </div>
      }
      </>
    );
  });

  return <div className="productCard__cont">{MapFourProducts}</div>;
};

export default ProductCard;
