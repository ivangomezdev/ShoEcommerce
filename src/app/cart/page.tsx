"use client"
import React from 'react'
import "./cart.css"

import CartCheckOut from '@/components/CartCheckOut'
import Link from 'next/link'


const page = () => {

  return (
    <div>
      <Link href={"/"}><button className='cartPage__backButton'>⬅ Volver al inicio</button></Link>
      <div className='cartPage__cart'>
    <CartCheckOut/>
      </div>
    </div>
  )
}

export default page
