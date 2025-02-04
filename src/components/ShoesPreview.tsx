"use client"
import React from "react";
import { Bigh1Dark, SubPGray } from "./ui/Fonts";
import "./shoesPreview.css"
import ProductCard from "./ProductCard";
const ShoesPreview = () => {
  return (
    <div className="shoesPreview__content">
      <SubPGray>The latest trends in athletic footwear</SubPGray>
      <Bigh1Dark>Sneakers & Kicks</Bigh1Dark>
      <ProductCard></ProductCard>
    </div>
  );
};

export default ShoesPreview;
