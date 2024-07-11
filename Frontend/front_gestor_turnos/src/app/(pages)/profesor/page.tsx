'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import withRoles from '@/app/componentes/HOC/WithRoles';
import { TablaTurnos } from '@/app/componentes/tablaTurnos/TablaTurnos';
import './pageProfesor.css'
import moment from 'moment';
import { Reportes } from '@/app/componentes/reportes/Reportes';
import { diaConMasReservas, turnosPorHoraDia } from '@/app/services/ReportesService';
import { Button } from 'react-bootstrap';

const Profesor = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fecha, setFecha] = useState(moment());
  const [concurrencia, setConcurrencia] = useState<{}>({});
  const [verConcurrencia, setVerConcurrencia] = useState<boolean>(false);
  const [turnosHora, setTurnosHora] = useState<any[]>([]);
  const [verTurnosHora, setVerTurnosHora] = useState<boolean>(false);

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
  const concurrenciaClick = async () => {
    const concurrenciaaux = await diaConMasReservas();
    const fechaTurno = moment(concurrenciaaux[0].fechaTurno).format("YYYY-MM-DD");
    const concurrenciaObj = {
      fechaTurno: fechaTurno,
      cantidad: concurrenciaaux[0].cantidad
    }
    muestraFecha();
    setConcurrencia(concurrenciaObj)
    return concurrenciaaux
  }
  const turnosHoraClick = async (fecha1: any) => {
    const turnosHoraAux = await turnosPorHoraDia({ fechaTurno: fecha1 });
    setTurnosHora(turnosHoraAux);
  }
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
            <div className=''>
              <Button variant="outline-primary" onClick={handleButtonClick}>{verConcurrencia ? 'Ocultar Concurrencia' : 'Ver Concurrencia'}</Button>
              {verConcurrencia && (<div className="contenedorTabla">
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
              </div>)}
            </div>

            <div>
              <Button variant="outline-primary" onClick={handleButtonClick2}>{verTurnosHora ? 'Ocultar Turnos' : 'Ver Turnos'}</Button>
              {verTurnosHora && (<div className="contenedorTabla">
                <table>
                  <thead>
                    <tr>
                      <th>Horario</th>
                      <th>Cantidad</th>
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
              </div>)}
            </div>
            {/*             <div>
              <button>Horario mas reservado de hoy</button>
              <div className="contenedorTabla">
                <table>
                  <thead>
                    <tr>
                      <th>Turno ID</th>
                      <th>Nombre</th>
                      <th>Hora de Turno</th>
                      <th>Andarivel</th>
                      <th>Usuario ID</th>
                      <th>Presentismo</th>
                      <th>Estado Presentismo</th>
                      <th>Actualizar</th>
                    </tr>
                  </thead>

                  <tbody>
                    {mostrar.map((registro, index) => (
                      <tr key={index}>
                        <td>{registro.turnoId}</td>
                        <td>{registro.username}</td>
                        <td>{registro.horaTurno}</td>
                        <td>{registro.andarivelSeleccionado}</td>
                        <td>{registro.usuarioId}</td>
                        <td>{registro.presentismo}</td>
                        <td><button onClick={() => handleClick_Cambia(registro.turnoId, registro.presentismo)}>Cambiar</button></td>
                        <td><button onClick={() => handleClick_Borra(registro.turnoId)} >Eliminar Turno</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div> */}

          </div>
        </div>
      </div>

      <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </>
  )
}

export default withRoles(Profesor, [2], "./home");