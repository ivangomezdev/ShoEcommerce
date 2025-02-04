"use client";
import React from "react";
import "./boxlogin.css";
import { BlackButton } from "./ui/Buttons";
import Link from "next/link";

const BoxLogin = () => {
  return (
    <div className="boxLogin__cont">
      <div>
        <h1>Registrate para un descuento especial</h1>
        <BlackButton><Link style={{color:"white",textDecoration:"none"}} href="/register">REGISTRO %10 OFF</Link></BlackButton>
      </div>
      <img src="/assets/loginnews.webp" />
    </div>
  );
};

export default BoxLogin;
