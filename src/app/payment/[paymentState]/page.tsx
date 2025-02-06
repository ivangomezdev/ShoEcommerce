"use client";

import React from "react";
import "./paymentStatus.css";
import PaymentStatusCard from "@/components/PaymentCard";
import { usePaymentData } from "@/hooks/UseCart";


const Page = () => {
 

  const { Paymentdata } = usePaymentData();

 
  
  return (
    <div>
      <PaymentStatusCard
        status={Paymentdata.status}
        to="ShoEcommerce@ecommerce.com"
        amount={Paymentdata.amount}
        date={Paymentdata.date}
        paymentId={Paymentdata.transactionId}
      />
    </div>
  );
};

export default Page;
