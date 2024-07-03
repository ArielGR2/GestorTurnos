'use client'
import './pageNadador.css'
import withRoles from "../../componentes/HOC/WithRoles"
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Grilla } from '@/app/componentes/grilla/Grilla'
import { mostrarLibres } from '@/app/services/GestorTurnos'
import { iTurno } from '@/app/model/iTurno'
import moment from 'moment'
import { CuadroTurno } from '@/app/componentes/cuadroTurno/CuadroTurno'

const Nadador = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fecha, setFecha] = useState(moment());

  const router = useRouter();
  const pathname = usePathname();

  const cerrarSesion = () => {
    sessionStorage.removeItem('token')
    setIsLoggedIn(false)
    if (pathname !== '/home') {
      router.push('home')
    };
  };

  const obtenerUsuario = () => {
    const jwt = require('jsonwebtoken');
    const usuarioId: number | null = jwt.decode(sessionStorage.getItem('token')).usuarioId;
    const username: string | null = jwt.decode(sessionStorage.getItem('token')).username;

    return {usuarioId,username}
  }

  const sumaDia = () => {
    var auxFecha = fecha.clone().add(1, 'd')
    setFecha(auxFecha);

  }
  const restaDia = () => {
    var auxFecha = fecha.clone().subtract(1, 'd')
    setFecha(auxFecha)
  }

  const muestraFecha = () => {
    return fecha.format('YYYY-MM-DD')
  }


  return (
    <>
      <div className='div-pageNadador'>

        <button onClick={restaDia}>Anterior</button>
        <h1>Bienvenido {obtenerUsuario().username}</h1>
        <button onClick={sumaDia}>Siguiente</button>
        <h2>Estos son los disponibles de:  {muestraFecha()}</h2>


        <div className='cuadroygrilla'>
          <CuadroTurno 
            fechaTurno={fecha}
            usuarioId={obtenerUsuario().usuarioId}
          />
          <Grilla 
            //key={1}
            fechaTurno={fecha}
            usuarioId={obtenerUsuario().usuarioId}
          />
        </div>
      </div>

      <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </>

  )
}

export default withRoles(Nadador, [1], "./home");    
