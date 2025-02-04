"use client";
import Form from "../../components/Form";
import { SubPGraySmall } from "@/components/ui/Fonts";
import React, { useEffect } from "react";
import "./authPage.css";
import { formDataAuth } from "@/utils/formData";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import Image from "next/image";
const Page = () => {

  const [cookies] = useCookies(["token"]); // Leer las cookies
  const router = useRouter()
  
 

  useEffect(() => {
    if (cookies.token) {
      // Si no tienes token, redirige automáticamente a /auth (login)
      router.push("/me");
    }
  }, [cookies.token]);
  
  return (
    <>
      <Image alt="img"
        style={{ width: "140px", padding: "10px" }}
        src="/assets/shoecommerce.png"
      />
      <div className="auth__page">
        <div className="auth__text">
          <h1>Bienvenido, Sneakerhead </h1>
          <SubPGraySmall>Por favor inicie sesión.</SubPGraySmall>

          <Form formButtonText={"Iniciar sesión"} path="auth" data={formDataAuth} />
          <p>
            No tienes cuenta aún? <span>Crea una gratis</span>
          </p>
        </div>
        <Image className="auth__shoesimg" src="/assets/shoes.jpg" alt="" />
      </div>
    </>
  );
};

export default Page;
