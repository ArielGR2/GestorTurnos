'use client'
import withRoles from '@/app/componentes/HOC/WithRoles';
import { RegisterNadador } from '@/app/componentes/register/RegisterNadador';
import { RegisterProfesor } from '@/app/componentes/register/RegisterProfesor';
import { RegisterAdministrador } from '@/app/componentes/register/RegisterAdmin';
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import './pageAdmin.css'
import { TablaTurnos } from '@/app/componentes/tablaTurnos/TablaTurnos';
import moment from 'moment';
import { diaConMasReservas, nadadorConMasAusencias, turnosPorHoraDia } from '@/app/services/ReportesService';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fecha, setFecha] = useState(moment());
  const [concurrencia, setConcurrencia] = useState<Concurrencia>({ fechaTurno: '', cantidad: 0 });
  const [verConcurrencia, setVerConcurrencia] = useState<boolean>(false);
  const [turnosHora, setTurnosHora] = useState<TurnoHora[]>([]);
  const [verTurnosHora, setVerTurnosHora] = useState<boolean>(false);
  const [ausencias, setAusencias] = useState<Presentismo[]>([]);
  const [verAusencias, setVerAusencias] = useState<boolean>(false);

  interface Concurrencia {
    fechaTurno: string;
    cantidad: number;
  }

  interface TurnoHora {
    hora: string;
    cantidad: number;
  }

  interface Presentismo {
    nombre: string;
    usuarioID: number;
    cantidad: number;
  }

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
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('home');
    if (pathname !== '/home') {
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
  const turnosAusenciaClick = async (fecha2: any) => {
    const ausenciaAux = await nadadorConMasAusencias({ fechaTurno: fecha2 });
    setAusencias(ausenciaAux);
  }
  const handleButtonClick = async () => {
    concurrenciaClick();
    setVerConcurrencia(!verConcurrencia);
  };
  const handleButtonClick2 = async () => {
    turnosHoraClick(muestraFecha());
    setVerTurnosHora(!verTurnosHora);
  };

  const handleButtonClick3 = async () => {
    turnosAusenciaClick(moment().format('YYYY-MM-DD'));
    setVerAusencias(!verAusencias);
  };

  const formatHora = (hora: number) => {
    return hora.toString().padStart(2, '0') + ":00";
  };
  useEffect(() => {
    concurrenciaClick();
    turnosHoraClick(muestraFecha());
  }, [fecha]);

  return (
    <>
      <div className='div-pageAdmin'>
        <div className='titulo1'>
          <h1>Bienvenido {obtenerUsuario().username}</h1>
          <button className='button' onClick={cerrarSesion}>Cerrar Sesion</button>
        </div>

        <div className='main'>
          <div className='div-main'>
            <div className='subtitulo2'>
              <button className='button' onClick={restaDia}>Ver día Anterior</button>
              <h2>Reservas del día: {muestraFecha()}</h2>
              <button className='button' onClick={sumaDia}>Ver día Siguiente</button>
            </div>
            <div>
              <TablaTurnos
                fechaTurno={fecha}
              />
            </div>

            <div className='contenedor'>
              <h2> Realizar una consulta</h2>
              <div className='div-botones'>
                <div>
                  <button className='button' onClick={handleButtonClick}>{verConcurrencia ? 'Ocultar Concurrencia' : 'Ver día con mayor Concurrencia'}</button>
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
                  <button className='button' onClick={handleButtonClick2}>{verTurnosHora ? 'Ocultar Turnos' : 'Ver cantidad de Turnos por Hs del día actual'}</button>
                  {verTurnosHora && (<div className="contenedorTabla">
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
                            <td>{formatHora(parseInt(registro.hora))}</td>
                            <td>{registro.cantidad}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>)}
                </div>

                <div>
                  <button className='button' onClick={handleButtonClick3}>{verAusencias ? 'Ocultar Usuarios' : 'Ver Usuarios con mas Faltas'}</button>
                  {verAusencias && (<div className="contenedorTabla">
                    <table>
                      <thead>
                        <tr>
                          <th>Usuario</th>
                          <th>Cantidad de Faltas</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ausencias.map((registro, index) => (
                          <tr key={index}>
                            <td>{registro.nombre}</td>
                            <td>{registro.cantidad}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>)}
                </div>

              </div>
            </div>
          </div>

          <div className='div-register'>
            <RegisterNadador />
            <RegisterProfesor />
            <RegisterAdministrador />
          </div>
        </div>
      </div>
    </>
  )
}
export default withRoles(Admin, [0], "./home")