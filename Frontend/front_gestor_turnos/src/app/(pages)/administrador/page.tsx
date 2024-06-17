'use client'
import withRoles from '@/app/componentes/HOC/WithRoles';
import { RegisterNadador } from '@/app/componentes/register/RegisterNadador';
import { RegisterProfesor } from '@/app/componentes/register/RegisterProfesor';
import { RegisterAdministrador } from '@/app/componentes/register/RegisterAdmin';
import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import './pageAdmin.css'

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const cerrarSesion = () => {
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
    if (pathname !== '/home') {
      router.push('home');
    };
  };

  return (
    <>
      <div className='div-pageAdmin'>Bienvenido ADMINISTRADOR

        <div className='div-register'>
          <RegisterNadador />
          <RegisterProfesor />
          <RegisterAdministrador />
        </div>

      </div>
      <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </>
  )
}
export default withRoles(Admin, [0], "./home")

