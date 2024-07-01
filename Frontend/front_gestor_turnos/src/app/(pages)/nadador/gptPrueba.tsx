'use client'
import './pageNadador.css'
import withRoles from "../../componentes/HOC/WithRoles"
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Grilla } from '@/app/componentes/grilla/Grilla'
import { mostrarLibres } from '@/app/services/GestorTurnos'
import { iTurno } from '@/app/model/iTurno'
import moment from 'moment'

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

  const obtenerUsuarioId = () => {
    const jwt = require('jsonwebtoken');
    const usuarioId: number | null = jwt.decode(sessionStorage.getItem('token')).usuarioId;
    console.log("EL USUARIO:" + usuarioId)
    return usuarioId;
  }

  const sumaDia = () => {
    
  }

  const restaDia = () => {
    setFecha(prevFecha => prevFecha.clone().subtract(1, 'd'));
  }

  const muestraFecha = () => {
    return fecha.format('YYYY-MM-DD');
  }

  useEffect(() => {
    console.log("fecha: " + muestraFecha());
  }, [fecha]);

  return (
    <>
      <div className='div-pageNadador'>
        <button onClick={restaDia}>Ayer</button><h1>Bienvenido Nadador </h1><button onClick={sumaDia}>Mañana</button>
        <h2>Estos son los disponibles de: {muestraFecha()}</h2>
        <div>
          <Grilla
            key={1}
            fechaTurno={muestraFecha()}
            usuarioId={obtenerUsuarioId()}
          />
        </div>
      </div>
      <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </>
  )
}

export default withRoles(Nadador, [1], "./home");


/* 'use client'
import React, { useState, useEffect } from 'react';
import { mostrarLibres, reservarTurno } from '@/app/services/GestorTurnos';

export const Grilla = (props: any) => {
    const { fechaTurno, usuarioId } = props;

    const [turnos, setTurnos] = useState<any>({});
    const [reservas, setReservas] = useState<any>({});

    useEffect(() => {
        const fetchTurnos = async () => {
            const turnosData = {};
            for (let hora = 7; hora <= 8; hora++) {
                for (let andarivel = 1; andarivel <= 4; andarivel++) {
                    turnosData[`${hora}-${andarivel}`] = await visualizarTurnos(hora, andarivel);
                }
            }
            setTurnos(turnosData);
        };
        fetchTurnos();
    }, [fechaTurno]);

    const visualizarTurnos = async (hora: number, andarivel: number) => {
        const turno = {
            "fechaTurno": fechaTurno,
            "horaTurno": hora,
            "andarivelSeleccionado": andarivel
        };
        const response = await mostrarLibres(turno);
        return response;
    };

    const reservaTurno = async (hora: number, andarivel: number) => {
        const turno = {
            "fechaTurno": fechaTurno,
            "horaTurno": hora,
            "andarivelSeleccionado": andarivel,
            "usuarioId": usuarioId
        };
        const response = await reservarTurno(turno);
        // Optionally, update the reservations state
        setReservas((prevReservas) => ({
            ...prevReservas,
            [`${hora}-${andarivel}`]: response
        }));
        return response;
    };

    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Horarios</th>
                            <th>Andarivel 1</th>
                            <th>Andarivel 2</th>
                            <th>Andarivel 3</th>
                            <th>Andarivel 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>7:00</td>
                            <td>
                                <button onClick={() => reservaTurno(7, 1)}>Reserva</button>
                                {turnos['7-1']}
                            </td>
                            <td>{turnos['7-2']}</td>
                            <td>{turnos['7-3']}</td>
                            <td>{turnos['7-4']}</td>
                        </tr>
                        <tr>
                            <td>8:00</td>
                            <td>{turnos['8-1']}</td>
                            <td>{turnos['8-2']}</td>
                            <td>{turnos['8-3']}</td>
                            <td>{turnos['8-4']}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
 */