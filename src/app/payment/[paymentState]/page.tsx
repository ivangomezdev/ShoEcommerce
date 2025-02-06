"use client";

import React from "react";
import "./paymentStatus.css";
import PaymentStatusCard from "@/components/PaymentCard";
import { usePaymentData } from "@/hooks/UseCart";


const Page = () => {
 

  const { Paymentdata,isLoading } = usePaymentData();
  console.log(Paymentdata);
  console.log(Paymentdata.status);
 
  
  return (
    <div>
{isLoading ?  <>Cargando</> :
      <PaymentStatusCard
        status="confirmed"
        to="ShoEcommerce@ecommerce.com"
        amount={11}
        date="1"
        paymentId="2"
      />
    }
    </div>
  );
};

export default Page;
