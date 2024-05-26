'use client'
import React from 'react'
import './pageNadador.css'
import withRoles from "../../componentes/HOC/WithRoles"

const Nadador = () => {
  return (
    <>
      <div className='div-pageNadador'>Bienvenido Nadador</div>
      {/* ../../home - Haciendo referencia a la carpeta a donde quiero volver */}
      <a href='../../home'>Volver al inicio</a>
    </>

  )
}

export default withRoles(Nadador, ["Nadador"], "/admin")