'use client'
import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';

import './pageProfesor.css'
import withRoles from '@/app/componentes/HOC/WithRoles';

const Profesor = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const cerrarSesion = () => {
    sessionStorage.removeItem('token')
    setIsLoggedIn(false)
    if (pathname !== '/home') {
      router.push('home')
    };
  };

  return (
    <>
      <div className='div-pageProfesor'>Bienvenido Profesor</div>

      <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </>
  )
}

export default withRoles(Profesor, [2], "./home")