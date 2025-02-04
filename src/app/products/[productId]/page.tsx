"use client";
import Header from "@/components/layouts/Header";
import { useOneProduct } from "@/hooks/UseAllProds";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import "./productPage.css";
import SimilarProducts from "@/components/SimilarProducts";
import Loading from "@/components/Loading";
import { useAtom } from "jotai";
import { cartAtom } from "@/hooks/UseCart";
import MySnackbar from "@/components/SnackBar";
import { useCookies } from "react-cookie";
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
const Page = () => {
  const params = useParams();
  const [cart, setCart] = useAtom(cartAtom);
  const productId = params.productId as string;

  const [cookies] = useCookies(["token"]); // Leer las cookies
  const [open, setOpen] = React.useState(false);
  const vertical = "bottom";
  const horizontal = "right";

  //cerrar toast
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
  const router = useRouter();

  //redirigir si no estoy log
  useEffect(() => {
    if (!cookies.token) {
     
      router.push("/auth");
    }
  }, [cookies.token]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const { data, isLoading } = useOneProduct(productId);

  const radioSize = (
    <div
     className="product__radio"
    >
       <RadioGroup defaultValue="38"  name="radio-buttons-group">
      <Radio value="38" label="38" variant="outlined" />
      <Radio value="39" label="39" variant="outlined" />
      <Radio value="40" label="40" variant="outlined" />
      </RadioGroup>
    
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
            <div style={{ display: "flex",marginTop:"20px"}}>
              <h3>Talle: </h3>
             {radioSize} 
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
