"use client";
import Form from "@/components/Form";
import { SubPGraySmall } from "@/components/ui/Fonts";
import { formDataRegister } from "@/utils/formData";
import React from "react";
import "../registerPage.css";
import Link from "next/link";


const Page = () => {
  return (
    <>
      <img
        style={{ width: "140px", padding: "10px" }}
        src="/assets/shoecommerce.png"
      />
      <div className="register__page">
        <div className="register__text">
          <h1>Bienvenido, Sneakerhead </h1>
          <SubPGraySmall>Completa/Verifica tú domicilio.</SubPGraySmall>
          <Form
            formButtonText={"Validar"}
            data={formDataRegister}
            path="/products"
          />
          <Link href={"/me"}>
            <p>Volver</p>
          </Link>
        </div>
        <img className="register__image" src="/assets/shoes.jpg" alt="" />
      </div>
    </>
  );
};

export default Page;
