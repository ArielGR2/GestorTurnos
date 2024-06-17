'use client'
import './pageNadador.css'
import withRoles from "../../componentes/HOC/WithRoles"
import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const Nadador = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  
  const cerrarSesion = () => {
    sessionStorage.removeItem('token')
    setIsLoggedIn(false)
    if (pathname !== '/home'){
      router.push('home')};
  };

  return (
    <>
      <div className='div-pageNadador'>Bienvenido Nadador</div>
      
      <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </>

  )
}

export default withRoles(Nadador, [1], "./home");


