"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import "./paymentStatus.css"
import PaymentStatusCard from '@/components/PaymentCard'
const Page = () => {
     const pageParams = useParams()
    const pageStatus = pageParams.paymentStatus as string
     
  return (
<div >
      <PaymentStatusCard
        status="successful"
        to="Sahil@upi"
        amount={10000}
        date="03 Aug, 2022"
        paymentId="#12345ABCDE"
      />
      </div>
  )
}

export default Page
