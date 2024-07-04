'use client'
import React, { useEffect, useState } from 'react'
import './CuadroTurno.css'
import { eliminarTurno, muestraTurnoReservado } from '@/app/services/GestorTurnos';

export const CuadroTurno = (props: any) => {
    const { fechaTurno, usuarioId } = props;

    const [mostar1, setMostrar1] = useState<any>({});

    const visualizarTurnos = async () => {

        const turno = {
            fechaTurno: fechaTurno.format("YYYY-MM-DD"),
            usuarioId: usuarioId
        };

        const response = await muestraTurnoReservado(turno);
        console.log("REASDAEASD", response)
        const length = response.length;
        console.log("LENGTH",length);
        if (length === 0) {
            return {
                fechaTurno: props.fechaTurno,
                usuarioId: props.usuarioId,
                andarivelSeleccionado: 0,
                horaTurno: 0
            };
        } else
        console.log("asdasddddddddd", response[0])
        return {
            fechaTurno: fechaTurno.format("YYYY-MM-DD"),
            usuarioId: usuarioId,
            andarivelSeleccionado: response[0].andarivelSeleccionado,
            horaTurno: response[0].horaTurno,
            turnoId: response[0].turnoId
        };
    }

    const eliminarTurnoMostrado = async (e: any) => {

        const turnoSeleccionado = await visualizarTurnos();
        console.log("turno seleccionado" + turnoSeleccionado)
        return await eliminarTurno(turnoSeleccionado);
    }

    useEffect(() => {
        console.log("Entro a CuadroTurno");
        const aux = async () => {
            const turnoAux = await visualizarTurnos();
            setMostrar1(turnoAux)
            console.log("muestro turno aux", turnoAux)
        };
        aux();
    }, [fechaTurno]);

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
