'use client'
import React, { useEffect, useState } from 'react'
import './CuadroTurno.css'
import { eliminarTurno, muestraTurnoReservado } from '@/app/services/GestorTurnos';
import { iTurno } from '@/app/model/iTurno';

export const CuadroTurno = (props: any) => {
    const { fechaTurno, usuarioId, turnoReservado, actualizarTurnoReservado } = props;
    const [mostar1, setMostrar1] = useState<any>({});

    const visualizarTurnos = async () => {
        const turno = {
            fechaTurno: fechaTurno.format("YYYY-MM-DD"),
            usuarioId: usuarioId
        };
        const response = await muestraTurnoReservado(turno);
        const length = response.length;
        if (length === 0) {
            return {};
        } else
            return {
                fechaTurno: fechaTurno.format("YYYY-MM-DD"),
                usuarioId: usuarioId,
                andarivelSeleccionado: response[0].andarivelSeleccionado,
                horaTurno: response[0].horaTurno,
                turnoId: response[0].turnoId
            };
    }
    const eliminarTurnoMostrado = async (e: any) => {
        const turno = {
            fechaTurno: fechaTurno.format("YYYY-MM-DD"),
            usuarioId: usuarioId
        };
        const turnoAEliminar = await muestraTurnoReservado(turno);
        const auxTurno : iTurno= {
            fechaTurno: fechaTurno.format("YYYY-MM-DD"),
            horaTurno: turnoAEliminar[0].horaTurno,
            andarivelSeleccionado: turnoAEliminar[0].andarivelSeleccionado,
            usuarioId: usuarioId
        }
        console.log("turno armado ", auxTurno);
        const hola = await eliminarTurno(auxTurno);
        if (hola) {
            setMostrar1({}); 
            actualizarTurnoReservado(null);
            visualizarTurnos();
        }
        return hola; 
    }

    useEffect(() => {
        console.log("Entro a CuadroTurno");
        const aux = async () => {
            const turnoAux = await visualizarTurnos();
            setMostrar1(turnoAux)
        };
        aux();
    }, [fechaTurno, turnoReservado, visualizarTurnos]);

    return (
        <div className='contenedorCuadro'>
            <p>Turno reservado</p>
            <p>Fecha: {mostar1.fechaTurno}</p>
            <p>Hora: {mostar1.horaTurno}</p>
            <p>Andarivel: {mostar1.andarivelSeleccionado}</p>
            <button onClick={eliminarTurnoMostrado}>Eliminar</button>
        </div>
    )
}
