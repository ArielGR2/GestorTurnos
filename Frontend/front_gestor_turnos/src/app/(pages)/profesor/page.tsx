'use client'
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import withRoles from '@/app/componentes/HOC/WithRoles';
import { TablaTurnos } from '@/app/componentes/tablaTurnos/TablaTurnos';
import './pageProfesor.css';
import moment from 'moment';
import { diaConMasReservas, turnosPorHoraDia } from '@/app/services/ReportesService';

const Profesor = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fecha, setFecha] = useState(moment());
  const [concurrencia, setConcurrencia] = useState({});
  const [verConcurrencia, setVerConcurrencia] = useState(false);
  const [turnosHora, setTurnosHora] = useState([]);
  const [verTurnosHora, setVerTurnosHora] = useState(false);

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

  const concurrenciaClick = async () => {
    const concurrenciaaux = await diaConMasReservas();
    const fechaTurno = moment(concurrenciaaux[0].fechaTurno).format("YYYY-MM-DD");
    const concurrenciaObj = {
      fechaTurno: fechaTurno,
      cantidad: concurrenciaaux[0].cantidad
    };
    muestraFecha();
    setConcurrencia(concurrenciaObj);
    return concurrenciaaux;
  };

  const turnosHoraClick = async (fecha1) => {
    const turnosHoraAux = await turnosPorHoraDia({ fechaTurno: fecha1 });
    setTurnosHora(turnosHoraAux);
  };

  const handleButtonClick = async () => {
    concurrenciaClick();
    setVerConcurrencia(!verConcurrencia);
  };

  const handleButtonClick2 = async () => {
    turnosHoraClick(muestraFecha());
    setVerTurnosHora(!verTurnosHora);
  };

  useEffect(() => {
    concurrenciaClick();
    turnosHoraClick(muestraFecha());
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
              <TablaTurnos fechaTurno={fecha} />
            </div>

            <div className='contenedor'>
              <h2>Realizar una consulta</h2>
              <div className='div-botones'>
                <div>
                  <button className='button' onClick={handleButtonClick}>
                    {verConcurrencia ? 'Ocultar Concurrencia' : 'Ver Concurrencia'}
                  </button>
                  {verConcurrencia && (
                    <div className="contenedorTabla">
                      <table>
                        <thead>
                          <tr>
                            <th>Fecha</th>
                            <th>Cantidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{concurrencia.fechaTurno}</td>
                            <td>{concurrencia.cantidad}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <div>
                  <button className='button' onClick={handleButtonClick2}>
                    {verTurnosHora ? 'Ocultar Turnos' : 'Ver Turnos'}
                  </button>
                  {verTurnosHora && (
                    <div className="contenedorTabla">
                      <table>
                        <thead>
                          <tr>
                            <th>Horario</th>
                            <th>Cantidad de Reservas</th>
                          </tr>
                        </thead>
                        <tbody>
                          {turnosHora.map((registro, index) => (
                            <tr key={index}>
                              <td>{registro.hora}</td>
                              <td>{registro.cantidad}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRoles(Profesor, [2], "./home");