"use client"
import React from 'react'
import { Facebook02Icon, Mail01Icon, TwitterIcon } from '../ui/icons/Social'
import "./socialBar.css"
import Link from 'next/link'
import { useCookies } from 'react-cookie'

const SocialBar = () => {
  const [cookies] = useCookies(["token"]);

const token = cookies.token
  
  return (
    <div className='socialBar__content'>
      <p>Delivery en 1 día disponible!</p>
      <div className='socialBar__social'>
        
          {token == undefined &&
          <div className='socialBar__auth'>
        <Link href="/auth">Login</Link>/
        <Link href="/register">Registro</Link>
        </div>
      }
   
     <TwitterIcon/>
     <Mail01Icon/>
     <Facebook02Icon/>
     </div>
    </div>
  )
}

export default SocialBar
