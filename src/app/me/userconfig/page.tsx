"use client";
import Form from "@/components/Form";
import { SubPGraySmall } from "@/components/ui/Fonts";
import { formDataRegister } from "@/utils/formData";
import React, { useEffect } from "react";
import "../registerPage.css";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";


const Page = () => {

   const [cookies] = useCookies(["token"]); // Leer las cookies
      const router = useRouter()
      
     
    
      useEffect(() => {
        if (!cookies.token) {
        //redirige si no estoy logueado
          router.push("/auth");
        }
      }, [cookies.token]);
      
  
  return (
    <>
      <img
        style={{ width: "140px", padding: "10px" }}
        src="/assets/shoecommerce.png"
      />
      <div className="register__page">
        <div className="register__text">
          <h1>Bienvenido, Sneakerhead </h1>
          <SubPGraySmall>Completa/Verifica tús datos.</SubPGraySmall>
      
          <Form
            formButtonText={"Validar"}
            data={formDataRegister}
            path="/me"
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
