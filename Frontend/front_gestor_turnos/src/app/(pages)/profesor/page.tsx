'use client'
import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import withRoles from '@/app/componentes/HOC/WithRoles';
import { TablaTurnos } from '@/app/componentes/tablaTurnos/TablaTurnos';
import './pageProfesor.css'
import moment from 'moment';
import { Reportes } from '@/app/componentes/reportes/Reportes';
import { diaConMasReservas, turnosPorHoraDia } from '@/app/services/ReportesService';

const Profesor = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fecha, setFecha] = useState(moment());
  const [concurrencia, setConcurrencia] = useState<{}>({});
  const [turnosHora, setTurnosHora] = useState<any[]>([]);

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
    const fechaTurno = concurrenciaaux[0].fechaTurno;
    const concurrenciaObj = {
      fechaTurno: fechaTurno,
      cantidad: concurrenciaaux[0].cantidad
    }
    setConcurrencia(concurrenciaObj)
    return concurrenciaaux
  }

  const turnosHoraClick = async (fecha1: any) => {
    const turnoHoraAux = [];
    console.log("Esto el la fecha 1: " + fecha1);
    const turnosHoraAux = await turnosPorHoraDia({fechaTurno: fecha1});
    console.log(turnosHoraAux);
    setTurnosHora(turnosHoraAux);

  }

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
              <button onClick={() => concurrenciaClick()}>Día con mas concurrencia</button>
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
            </div>

            <div>
              <button onClick={() => turnosHoraClick(muestraFecha())}>Nadador con mas faltas</button>
              <div className="contenedorTabla">
                <table>
                  <thead>
                    <tr>
                      <th>Turno ID</th>
                      <th>Nombre</th>
                      <th>Hora de Turno</th>
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
          < Reportes />
        </div>

      </div>

      <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </>
  )
}

export default withRoles(Profesor, [2], "./home")