'use client'
import React from 'react'
import './pageProfesor.css'
import withRoles from '@/app/componentes/HOC/WithRoles';

const Profesor = ()=> {
  return (
    <>
    <div className='div-pageProfesor'>Bienvenido Profesor</div>
    {/* ../../home - Haciendo referencia a la carpeta a donde quiero volver */}
    <a href='../../home'>Volver al inicio</a>
    </>
  )
}

export default withRoles(Profesor, ["Profesor"], "/home")