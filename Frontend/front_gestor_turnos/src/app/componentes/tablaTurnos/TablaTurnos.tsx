"use client"
import { mostrarTurnosDelDia } from '@/app/services/GestorTurnos';
import React, { useEffect, useState } from 'react'

export const TablaTurnos = (props: any) => {
  const { fechaTurno } = props;

  const [mostrar, setMostrar] = useState<any[]>([]);
  // const [auxTurnosFechaOK, setAuxTurnosFechaOK] = useState<any[]>([]);

  const visualizarTurnos = async () => {
    const auxTurnos = [];

    const nuevaFecha = fechaTurno.format("YYYY-MM-DD")
    console.log("nueva fechaaaa", nuevaFecha);
    const auxFechaTurno = {fechaTurno: nuevaFecha};
    const response = await mostrarTurnosDelDia(auxFechaTurno);
    auxTurnos.push(response);
    console.log("linea 19 ARREGLO AUXTURNO",auxTurnos[0].data);
    // const arreglo = auxTurnos[0].data

    // for (let i = 0; i < arreglo.length; i++) {
    // setAuxTurnosFechaOK(arreglo[i].fechaTurno.format("YYYY-MM-DD"));
    // // }
    // console.log("linea 25",auxTurnosFechaOK);
    return auxTurnos[0].data;
  };



  useEffect(() => {
    const aux = async () => {
      setMostrar(await visualizarTurnos());
    };
    aux();
  }, [fechaTurno]);


  return (
    <>
      <div className="contenedorTabla">
        <table>
          <thead>
            <tr>
              <th>Turno ID</th>
              <th>Hora de Turno</th>
              <th>Andarivel</th>
              <th>Usuario ID</th>
              <th>Presentismo</th>
              <th>Accion</th>
              <th>Actualizar</th>
              
            </tr>
          </thead>

          <tbody>
            {mostrar.map((registro, index) => (
              <tr key={index}>
                <td>{registro.turnoId}</td>
                <td>{registro.horaTurno}</td>
                <td>{registro.andarivelSeleccionado}</td>
                <td>{registro.usuarioId}</td>
                <td>{registro.Presentismo? "true" : "false"}</td>
                <td><button>Modificar Presentismo</button></td>
                <td><button>Modificar Turno</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
