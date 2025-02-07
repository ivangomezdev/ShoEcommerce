"use client";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import GitHubIcon from "@mui/icons-material/GitHub"
import "./socialBar.css";
import Link from "next/link";
import { useCookies } from "react-cookie";

const SocialBar = () => {
  const [cookies] = useCookies(["token"]);

  const token = cookies.token;

  return (
    <div className="socialBar__content">
      <p>Delivery en 1 día disponible!</p>
      <div className="socialBar__social">
        {token == undefined && (
          <div className="socialBar__auth">
            <Link href="/auth">Login</Link>/
            <Link href="/register">Registro</Link>
          </div>
        )}

        <Link
          href="https://www.linkedin.com/in/iv%C3%A1n-g%C3%B3mez-ab957021a/"
          passHref
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/iv%C3%A1n-g%C3%B3mez-ab957021a/"
          passHref
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <LocationOnIcon />
        </Link>
        <Link
          href="https://github.com/ivangomezdev/ShoEcommerce"
          passHref
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <GitHubIcon />
        </Link>
      </div>
    </div>
  );
};

export default SocialBar;
