"use client";
import React, { FormEvent, useEffect, useState } from "react";
import "./searchUi.css";
import { useSearchProducts } from "../hooks/UseAllProds";
import Link from "next/link";
import Loading from "./Loading";
//declaro el type
type searchUiTypes = {
  sideChecks: { cat: string; id: string }[];
};

const SearchUi = ({ sideChecks }: searchUiTypes) => {
  const [searchParams, setSearchParams] = useState("");
  const { data, isLoading } = useSearchProducts(searchParams, 16);
  const [product, setProduct] = useState<
    {
      productImage: string;
      productName: string;
      productPrice: String;
      productCategory: string;
      brand: string;
      productId: string;
    }[]
  >([]);

  const allData = data?.data;

  //manejo el buscador
  const handleSearch = (e: FormEvent) => {
    const inputData = e.target as HTMLFormElement;
    if (inputData) {
      setSearchParams(inputData.value);
    }
  };

  //Creo las cards
  const CardProducts = product.map((i) => {
    return (
      <div className="searchUi__Card">
        <img className="searchUi__Cardimg" src={i.productImage}></img>
        <img className="searchUi__brand" src={i.brand} alt="" />
        <div>
          <h4>{i.productName}</h4>
          <p className="SearchUi__price">${i.productPrice}</p>
          <Link
            style={{ textDecoration: "none" }}
            href={`/products/${i.productId}`}
          >
            <p className="SearchUi__cart">→</p>
          </Link>
        </div>
      </div>
    );
  });

  //creo los labels de busqueda
  const labels = sideChecks.map((i, index) => {
    return (
      <div key={index} className="searchUi__sideCheckBox">
        <input id={i.id} type="checkbox" />
        <label htmlFor="">{i.cat}</label>
      </div>
    );
  });

  useEffect(() => {
    if (Array.isArray(allData)) {
      setProduct(allData);
    }
  }, [isLoading, allData]);

  return (
    <section className="SearchUi__layout">
      <div className="SearchUi__header">
        <input onChange={handleSearch} placeholder="Buscar..." />
      </div>
      <div className="SearchUi__side">
        <h2>Categorias</h2>
        {labels}
      </div>
      <div className="SearchUi__body">
        {isLoading ? (
          <div className="searchUi__load">
            <Loading />
          </div>
        ) : (
          <> {CardProducts} </>
        )}
      </div>
    </section>
  );
};

export default SearchUi;
