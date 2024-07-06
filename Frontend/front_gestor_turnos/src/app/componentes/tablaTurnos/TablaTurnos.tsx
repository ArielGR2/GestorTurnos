"use client"
import { mostrarTurnosDelDia } from '@/app/services/GestorTurnos';
import React, { useEffect, useState } from 'react'

export const TablaTurnos = (props: any) => {
  const { fechaTurno } = props;

  const [mostrar, setMostrar] = useState<any[]>([]);
  const [auxFechaTurno, setAuxFechaTurno] = useState<{}>({});

  const visualizarTurnos = async () => {
    const auxTurnos = [];
    const nuevaFecha = fechaTurno.format("YYYY-MM-DD")
    console.log("nueva fechaaaa", nuevaFecha);
    const auxFechaTurno = {fechaTurno: nuevaFecha};
    const response = await mostrarTurnosDelDia(auxFechaTurno);
    auxTurnos.push(response);
    console.log("ARREGLO AUXTURNO",auxTurnos)
    return auxTurnos;
  };

  useEffect(() => {
    const aux = async () => {
      setMostrar(await visualizarTurnos());
    };
    aux();
  }, []);


  return (
    <>
      <div className="contenedorTabla">
        <table>
          <thead>
            <tr>
              <th>Turno ID</th>
              <th>Fecha de Turno</th>
              <th>Hora de Turno</th>
              <th>Andarivel</th>
              <th>Usuario ID</th>
              <th>Presentismo</th>
            </tr>
          </thead>

          <tbody>
            {mostrar.map((registro, index) => (
              <tr key={index}>
                <td>{registro.turnoId}</td>
                <td>{registro.fechaTurno}</td>
                <td>{registro.horaTurno}</td>
                <td>{registro.andarivelSeleccionado}</td>
                <td>{registro.usuarioId}</td>
                <td>{registro.Presentismo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
