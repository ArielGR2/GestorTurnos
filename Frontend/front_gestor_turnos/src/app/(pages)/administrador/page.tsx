'use client'
import withRoles from '@/app/componentes/HOC/WithRoles';
import React from 'react'
import './pageAdmin.css'

const Admin = () => {
  return (
    <>
    <div className='div-pageAdmin'>Bienvenido ADMINISTRADOR</div>
    {/* ../../home - Haciendo referencia a la carpeta a donde quiero volver */}
    <a href='../../home'>Volver al inicio</a>
    </>
  )
}
export default withRoles(Admin, [0], "./home")

