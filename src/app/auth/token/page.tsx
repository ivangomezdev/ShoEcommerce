"use client";
import Form from "@/components/Form";
import { SubPGraySmall } from "@/components/ui/Fonts";
import { formDataCode } from "@/utils/formData";
import React, { useEffect } from "react";

import "../authPage.css";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

const Page = () => {
   const [cookies] = useCookies(["token"]); // Leer las cookies
    const router = useRouter()
    
   
  
    useEffect(() => {
      if (cookies.token) {
      //redirige si ya estoy logueado
        router.push("/me");
      }
    }, [cookies.token]);
    
  return (
    <>
      <img
        style={{ width: "140px", padding: "10px" }}
        src="/assets/shoecommerce.png"
      />
      <div className="auth__page">
        <div className="auth__text">
          <h1>Bienvenido, Sneakerhead </h1>
          <SubPGraySmall>Por favor ingrese su codigo.</SubPGraySmall>

          <Form formButtonText={"Listo"} data={formDataCode} path="auth/token" />

          <p>
            No tienes cuenta aún? <span>Crea una gratis</span>
          </p>
        </div>
        <img className="auth__shoesimg" src="/assets/shoes.jpg" alt="" />
      </div>
    </>
  );
};

export default Page;
