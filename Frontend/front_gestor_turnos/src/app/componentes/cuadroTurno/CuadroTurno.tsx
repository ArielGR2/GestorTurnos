'use client'
import React, { useEffect, useState } from 'react'
import './CuadroTurno.css'
import { eliminarTurno, muestraTurnoReservado } from '@/app/services/GestorTurnos';

export const CuadroTurno = (props: any) => {
    const { fechaTurno, usuarioId } = props;
    const [mostar, setMostrar] = useState<any>({});

    const visualizarTurnos = async () => {
        
        const turno = {fechaTurno: fechaTurno.format("YYYY-MM-DD"), usuarioId: usuarioId};
        console.log("turno"+turno.fechaTurno, turno.usuarioId);
        const response = await muestraTurnoReservado(turno);
        const aux = JSON.parse(JSON.stringify(response));
        console.log(aux);
        console.log(response);
        return response;
    }

    const eliminarTurnoMostrado = async (e: any) => {
        const turnoSeleccionado = await visualizarTurnos();
        console.log("turno seleccionado" + turnoSeleccionado)
        return await eliminarTurno(turnoSeleccionado);
    }

    useEffect(() => {
        console.log("Entro al useEffect!!!!");
        const aux = async () => {
            const turnoAux = await visualizarTurnos();
            setMostrar(turnoAux)
        };
        aux();
    }, [fechaTurno]);

    return (
        <div className='contenedorCuadro'>
            <p>Turno reservado</p>
            <p>Fecha: {mostar.fechaTurno}</p>
            <p>Hora: {mostar.horaTurno}</p>
            <p>Andarivel: {mostar.andarivelSeleccionado}</p>
            <button onClick={eliminarTurnoMostrado}>Eliminar</button>
        </div>
    )
}
