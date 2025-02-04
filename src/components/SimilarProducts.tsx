import { fetcher } from "@/hooks/UseAllProds";
import React from "react";
import useSWR from "swr";
import "./similarProducts.css";
import Link from "next/link";
type ProductType = {
  productId: string;
  productImage: string;
  productPrice: string;
  productName: string;
  productStock: string;
};

const SimilarProducts = () => {
  const { data, isLoading } = useSWR("/api/products/all", fetcher, {
    fallbackData: [],
  });

  const randomInt = Math.floor(Math.random() * 10);

  const allProds = Array.isArray(data?.data) ? data.data : [];
  const onlyFourProds = allProds.slice(
    randomInt,
    randomInt + 4
  ) as ProductType[];

  const similarProds = onlyFourProds.map((i,index) => {
    return (
      <div key={index}>
        <Link href={`/products/${i.productId}`}>
          <img src={i.productImage} />
        </Link>
      </div>
    );
  });

  return (
    <div className="similarProducts__content">
      {isLoading == false && (
        <>
          <h3>Productos similares</h3>
          <div className="similarProducts__products">{similarProds}</div>
        </>
      )}
    </div>
  );
};

export default SimilarProducts;
