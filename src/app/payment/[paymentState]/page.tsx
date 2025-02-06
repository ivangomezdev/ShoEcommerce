"use client";

import React from "react";
import "./paymentStatus.css";
import PaymentStatusCard from "@/components/PaymentCard";
import { usePaymentData } from "@/hooks/UseCart";


const Page = () => {
 

  const { Paymentdata,isLoading } = usePaymentData();
  const payData = Paymentdata?.paymentData
  
  
  
 
  
  return (
    <div>
{isLoading ?  <>Cargando</> :
      <PaymentStatusCard
        status={payData.status}
        to="ShoEcommerce@ecommerce.com"
        amount={payData.amount}
        date={payData.date}
        paymentId={payData.transactio}
      />
    }
    </div>
  );
};

export default Page;
