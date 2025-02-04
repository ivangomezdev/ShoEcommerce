"use client";
import { SubPGraySmall } from "@/components/ui/Fonts";
import React, { useEffect } from "react";
import "./registerPage.css";
import Link from "next/link";
import { BlackButton } from "@/components/ui/Buttons";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";



const Page = () => {
  const [cookies] = useCookies(["token"]); // Leer las cookies
  const router = useRouter()
  
 

  useEffect(() => {
    if (!cookies.token) {
      // Si no tienes token, redirige automáticamente a /auth (login)
      router.push("/auth");
    }
  }, [cookies.token]);

  return (
    <>
      <img alt=""
        style={{ width: "140px", padding: "10px" }}
        src="/assets/shoecommerce.png"
      />
      <div className="register__page">
        <div className="register__text">
          <h1>Bienvenido, Sneakerhead </h1>
          <SubPGraySmall>Completa/Verifica tús datos.</SubPGraySmall>
          <div className="register__buttons">
            <Link href={"/me/userconfig"}>
              <BlackButton>Configurar tús datos</BlackButton>
            </Link>
            <Link href={"/me/address"}>
              <BlackButton>Configurar Dirección de entrega</BlackButton>
            </Link>
          </div>
          <Link href={"/products"}>
            <p>Ir a tienda</p>
          </Link>
        </div>
        <img className="register__image" src="/assets/shoes.jpg" alt="" />
      </div>
    </>
  );
};

export default Page;
