'use client'
import './pageNadador.css'
import withRoles from "../../componentes/HOC/WithRoles"
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Grilla } from '@/app/componentes/grilla/Grilla'
import moment from 'moment'
import { CuadroTurno } from '@/app/componentes/cuadroTurno/CuadroTurno'

const Nadador = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fecha, setFecha] = useState(moment());
  const [turnoReservado, setTurnoReservado] = useState(null);

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
    return { usuarioId, username }
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
  const actualizarTurnoReservado = (turno: any) => {
    setTurnoReservado(turno);
  }

  return (
    <>
      <div className='div-pageNadador'>
        <div className="titulo1">
          <h1>Bienvenido {obtenerUsuario().username}</h1>
          <button className="button" onClick={cerrarSesion}>Cerrar Sesion</button>
        </div>

        <div className="main">
          <div className="div-main">
            <div className="subtitulo2">
              <button className="button" onClick={restaDia}>Ver día Anterior</button>
              <div className="subtitulo3">
                <h2>Reservas del día: {muestraFecha()}</h2>
                <h3>Ocupacion maxima por andarivel: 4</h3>
              </div>
              <button className="button" onClick={sumaDia}>Ver día Siguiente</button>
            </div>
          </div>

          <div className='cuadroygrilla'>
            <CuadroTurno
              fechaTurno={fecha}
              usuarioId={obtenerUsuario().usuarioId}
              turnoReservado={turnoReservado}
              actualizarTurnoReservado={actualizarTurnoReservado}
            />
            <Grilla
              fechaTurno={fecha}
              usuarioId={obtenerUsuario().usuarioId}
              actualizarTurnoReservado={actualizarTurnoReservado}
            />
          </div>
        </div>
      </div>
    </>

  )
}

export default withRoles(Nadador, [1], "./home");    
