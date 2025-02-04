import React, { useEffect } from "react";
import "./cartCheckOut.css";
import { cartAtom } from "@/hooks/UseCart";
import { useAtom } from "jotai";
import PaymentComponent from "./PaymentComponent";

const CartCheckOut = () => {
  const [cart, setCart] = useAtom(cartAtom);
  // Sumamos los costos
  let reduce = cart.reduce((sum, actual) => sum + actual.productPrice, 0);

  // Usamos localStorage para almacenar el carrito al montar la página (solo una vez)
  useEffect(() => {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) setCart(JSON.parse(savedCart));
  }, []); // Dependencia vacía para que solo se ejecute una vez.

  const handleDelete = (id: string) => {
      const deleting = cart.filter((i) => i.productId !== id);
      setCart(deleting);
      localStorage.setItem("cart", JSON.stringify(deleting));

  };
 
  



 const checkOutProducts =  cart.map((i,index)=>{
     return <div className="cartCheckOut__prod" key={index}>
          <button
          onClick={() => handleDelete(i.productId)}
          className="cartCheckOut__delete"
        >
          ❌
        </button>
       <img src={i.productImage} />
       <h6> {i.productName} </h6>
       <p>${i.productPrice}</p>
      </div>
    })
  return <div className="cartCheckOut__cont">
    <h2>Resumen</h2>
    <div className="cartCheckOut__Scroll">
   {checkOutProducts}
    <br />
    </div>
    <p className="cartCheckOut__price">Total: ${reduce}</p>
   <PaymentComponent/>

  </div>;
};

export default CartCheckOut;
