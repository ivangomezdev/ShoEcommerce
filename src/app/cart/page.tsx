"use client"
import React, { useEffect } from 'react'
import "./cart.css"

import CartCheckOut from '@/components/CartCheckOut'
import Link from 'next/link'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/navigation'



const Page = () => {
 const [cookies] = useCookies(["token"]); // Leer las cookies
      const router = useRouter()
      
     
    
      useEffect(() => {
        if (!cookies.token) {
        //redirige si no estoy logueado
          router.push("/auth");
        }
      }, [cookies.token]);
      
  return (
    <div>
      <Link href={"/"}><button className='cartPage__backButton'>⬅ Volver al inicio</button></Link>
      <div className='cartPage__cart'>
    <CartCheckOut/>
      </div>
    </div>
  )
}

export default Page
