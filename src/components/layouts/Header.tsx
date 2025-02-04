"use client"
import React, { useEffect } from "react";
import { navLinks } from "@/utils/RenderNavLinks/navData";
import "./header.css";
import { Search01Icon, ShoppingCart02Icon, UserIcon } from "../ui/icons/Header";
import Link from "next/link";
import { useAtom } from "jotai";
import { cartAtom } from "@/hooks/UseCart";
import { CBadge } from "@coreui/react";

const Header = () => {

  const [cart, setCart] = useAtom(cartAtom);
  
    useEffect(()=>{
      const cartData = localStorage.getItem("cart")
      if (cartData) {
        setCart(JSON.parse(cartData))
        
      }
    },[])
    
  const navRender = navLinks.map((link, index) => (
    <li key={index}>
      <Link
        style={{ textDecoration: "none", color: "black", fontWeight: "500" }}
        href={link.href}
      >
        {link.text}
      </Link>
    </li>
  ));

  return (
    <div className="header__content">
      <img
        src={"/assets/shoecommerce.png"}
        alt="Logo"
        className="header__logo"
      />
      <ul className="header__ul">{navRender}</ul>
      <div className="header__icons">
        <Link href={"/products"}>
          <Search01Icon />
        </Link>
        <Link style={{textDecoration:"none"}} href={"/me"}>
          
          <UserIcon />
        </Link>
        <Link  href={"/cart"}>
          <ShoppingCart02Icon />
          <CBadge className="header__badge" color="danger"  shape="rounded-pill">
          {cart.length}
        </CBadge>
        </Link>
      </div>
    </div>
  );
};

export default Header;
