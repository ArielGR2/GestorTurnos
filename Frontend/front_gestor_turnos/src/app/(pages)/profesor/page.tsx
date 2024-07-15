'use client'
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import withRoles from '@/app/componentes/HOC/WithRoles';
import { TablaTurnoProfe } from '@/app/componentes/tablaTurnoProfe/TablaTurnoProfe';
import './pageProfesor.css';
import moment from 'moment';

const Profesor = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fecha, setFecha] = useState(moment());

  const router = useRouter();
  const pathname = usePathname();

  const sumaDia = () => {
    const auxFecha = fecha.clone().add(1, 'd');
    setFecha(auxFecha);
  };

  const restaDia = () => {
    const auxFecha = fecha.clone().subtract(1, 'd');
    setFecha(auxFecha);
  };

  const muestraFecha = () => {
    return fecha.format('YYYY-MM-DD');
  };

  const obtenerUsuario = () => {
    const jwt = require('jsonwebtoken');
    const usuarioId = jwt.decode(sessionStorage.getItem('token')).usuarioId;
    const username = jwt.decode(sessionStorage.getItem('token')).username;
    return { usuarioId, username };
  };

  const cerrarSesion = () => {
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
    if (pathname !== '/home') {
      router.push('home');
    }
  };

  useEffect(() => {

  }, [fecha]);

  return (
    <>
      <div className='div-pageProfesor'>
        <div className='titulo1'>
          <h1>Bienvenido {obtenerUsuario().username}</h1>
          <button className='button' onClick={cerrarSesion}>Cerrar Sesión</button>
        </div>

        <div className='main'>
          <div className='div-main'>
            <div className='subtitulo2'>
              <button className='button' onClick={restaDia}>Ver día Anterior</button>
              <h2>Reservas del día: {muestraFecha()}</h2>
              <button className='button' onClick={sumaDia}>Ver día Siguiente</button>
            </div>

            <div>
              <TablaTurnoProfe fechaTurno={fecha} />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default withRoles(Profesor, [2], "./home");