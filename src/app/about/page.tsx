"use client"
import Header from "@/components/layouts/Header";
import React from "react";
import "./aboutPage.css"
import { BlackButton } from "@/components/ui/Buttons";
import Link from "next/link";

const Page = () => {
  return (
   <div className="aboutPage__body">
        <Header/>
    <div className="aboutPage__content">
      <h1>¿Quienes somos?</h1>
      <p>
        En Shoecommerce, somos más que una tienda de sneakers: somos
        una comunidad apasionada por el estilo, la comodidad y la cultura
        urbana. Desde el primer día, nos propusimos traer los modelos más
        exclusivos y codiciados del mercado, asegurándonos de que cada par de
        zapatillas que encuentres aquí sea auténtico, original y de la más alta
        calidad. Trabajamos con las mejores marcas y colecciones limitadas para
        ofrecerte lo último en moda sneaker. Ya seas un coleccionista, un
        fanático de la cultura streetwear o simplemente alguien que busca el
        mejor calzado para el día a día, aquí encontrarás lo que necesitas.
        Nuestro compromiso es brindarte una experiencia de compra fácil, segura
        y rápida, con envíos a todo el país y atención personalizada. ¡Únete a
        nuestra comunidad y pisa fuerte con estilo!
      </p>
     <Link href={"/auth"}> <BlackButton>Únete</BlackButton> </Link> 
    </div>

    </div> 
  );
};

export default Page;
