"use client";
import Header from "@/components/layouts/Header";
import { useOneProduct } from "@/hooks/UseAllProds";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import "./productPage.css";
import SimilarProducts from "@/components/SimilarProducts";
import Loading from "@/components/Loading";
import { useAtom } from "jotai";
import { cartAtom } from "@/hooks/UseCart";
import MySnackbar from "@/components/SnackBar";

const Page = () => {
  const params = useParams();
  const [cart, setCart] = useAtom(cartAtom);
  const productId = params.productId as string;

  const [open, setOpen] = React.useState(false);
  const vertical = "bottom";
  const horizontal = "right";

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    console.log(event);
    
  };

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const { data, isLoading } = useOneProduct(productId);

  const radioSize = (
    <div
      style={{
        display: "flex",
        gap: "5px",
        marginLeft: "5px",
        textAlign: "center",
      }}
    >
      <input name="option" type="radio" />
      <p>38</p>
      <input name="option" type="radio" />
      <p>39</p>
      <input name="option" type="radio" />
      <p>41</p>
    </div>
  );

  //agregamos el producto al CART
  const onClick = () => {
    setOpen(true);
    setCart((prev) => (prev.includes(data) ? [...prev] : [...prev, data]));
  };

  return (
    <div>
      <Header />
      {isLoading == false ? (
        <div className="product__Card">
          <img
            style={{ width: "300px", borderRadius: "50%" }}
            src={data.productImage}
          />
          <div className="product__Text">
            <h1>{data.productName}</h1>
            <p>{data.productDescription}</p>
            <p>Precio: ${data.productPrice}</p>
            <div style={{ display: "flex" }}>
              <h4>Talle: </h4>
              <div>{radioSize} </div>
            </div>
            <button onClick={onClick} className="product__button">
              Agregar al carrito
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}

      <MySnackbar
      snackText="Producto agregado exitosamente"
        open={open}
        handleClose={handleClose}
        vertical={vertical}
        horizontal={horizontal}
      />

      <SimilarProducts />
    </div>
  );
};

export default Page;
