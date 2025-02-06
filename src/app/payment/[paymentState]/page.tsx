"use client";

import React from "react";
import "./paymentStatus.css";
import PaymentStatusCard from "@/components/PaymentCard";
import { usePaymentData } from "@/hooks/UseCart";


const Page = () => {
 

  const { data } = usePaymentData();

  console.log(data);
  
  return (
    <div>
      <PaymentStatusCard
        status="approved"
        to="Sahil@upi"
        amount={10000}
        date="03 Aug, 2022"
        paymentId="#12345ABCDE"
      />
    </div>
  );
};

export default Page;
