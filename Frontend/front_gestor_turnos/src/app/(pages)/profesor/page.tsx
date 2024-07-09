'use client'
import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import withRoles from '@/app/componentes/HOC/WithRoles';
import { TablaTurnos } from '@/app/componentes/tablaTurnos/TablaTurnos';
import './pageProfesor.css'
import moment from 'moment';
import { Reportes } from '@/app/componentes/reportes/Reportes';

const Profesor = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fecha, setFecha] = useState(moment());

  const router = useRouter();
  const pathname = usePathname();

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
  const obtenerUsuario = () => {
    const jwt = require('jsonwebtoken');
    const usuarioId: number | null = jwt.decode(sessionStorage.getItem('token')).usuarioId;
    const username: string | null = jwt.decode(sessionStorage.getItem('token')).username;

    return { usuarioId, username }
  }
  const cerrarSesion = () => {
    sessionStorage.removeItem('token')
    setIsLoggedIn(false)
    if (pathname !== '/home') {
      router.push('home')
    };
  };

  return (
    <>
      <div className='div-pageProfe'>
        <button onClick={restaDia}>Anterior</button>
        <h1>Bienvenido {obtenerUsuario().username}</h1>
        <button onClick={sumaDia}>Siguiente</button>
        <h2>Estos son los disponibles de:  {muestraFecha()}</h2>

        <div>
          <TablaTurnos
            fechaTurno={fecha}
          />
        </div>

        <div className='contenedor'>
          <h2> Realizar una consulta</h2>

          <div>
            <button>Día con mas concurrencia</button><button>Nadador con mas faltas</button><button>Horario mas reservado de hoy</button>
          </div>
          < Reportes />
        </div>

      </div>

      <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </>
  )
}

export default withRoles(Profesor, [2], "./home")