"use client";
import React from "react";
import "./gridCards.css";
import { SubP } from "./ui/Fonts";
import Link from "next/link";

type CardData = {
  data: {
    subP: string;
    title: string;
    sex: string;
    linkText: string;
    image: string;
    href: string;
    ref: string;
  }[];
};

const GridCards = ({ data }: CardData) => {
  const dataForCard = data.map((i, index) => {
    return (
      <div className="gridCards__card" key={index}>
        <img src={i.image} alt={i.ref} />
        <div className="gridCards__text">
          <SubP>{i.subP}</SubP>
          <h2>
            <span>{i.title}</span>
            <span>{i.sex}</span>
          </h2>
          <Link href={i.href}>{i.linkText}</Link>
        </div>
      </div>
    );
  });

  return <div className="gridCards__content">{dataForCard}</div>;
};

export default GridCards;
