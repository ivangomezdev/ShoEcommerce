"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { RedButton } from "./ui/Buttons";
import { Bigh1, SubP, PrimaryP } from "./ui/Fonts";
import Link from "next/link";


type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
type LeftPos = '1px' | '40px';
type CarouselProps = {
  data: {
    src: string;
    alt: string;
    subText: string;
    title: string;
    primaryP: string;
    buttonText: string;
    align:TextAlign;
    leftPos:LeftPos;
  }[];
};



export const CarouselCrossfadeExample = ({ data }: CarouselProps) => {
  const carouselImagesMap = data.map((i, key) => {
    return (
      <CCarouselItem  className="carousel__item" key={key}>
        <div style={{textAlign:i.align  as TextAlign ,marginRight:i.leftPos  as LeftPos}}  className="carousel__textContent">
          <SubP>{i.subText}</SubP>
          <Bigh1>{i.title}</Bigh1>
          <PrimaryP className="carousel__description">{i.primaryP}</PrimaryP>
          <Link href={"/products"}>
          <RedButton>{i.buttonText}</RedButton>
          </Link>
        </div>
        <CImage className="d-block w-100" src={i.src} alt={i.alt} />
      </CCarouselItem>
    );
  });

  return (
    <CCarousel
      wrap
      className="carousel__content"
      transition="slide"
      interval={2000}
    >
      {carouselImagesMap}
    </CCarousel>
    
  );
};
