"use client"
import { iTurno } from '@/app/model/iTurno';
import { cambiarPresentismo, eliminarTurnoPorId, mostrarTurnosDelDia } from '@/app/services/GestorTurnos';
import React, { useEffect, useState } from 'react'

export const TablaTurnos = (props: any) => {
  const { fechaTurno } = props;

  const [mostrar, setMostrar] = useState<any[]>([]);
  // const [auxTurnosFechaOK, setAuxTurnosFechaOK] = useState<any[]>([]);

  const visualizarTurnos = async () => {
    const auxTurnos = [];
    const nuevaFecha = fechaTurno.format("YYYY-MM-DD")
    const auxFechaTurno = { fechaTurno: nuevaFecha };
    const response = await mostrarTurnosDelDia(auxFechaTurno);
    auxTurnos.push(response);
    return auxTurnos[0].data;

  };

  const handleClick_Cambia = async (turnoIdAux: number, presentismoAux: boolean) => {
    const turno: iTurno = {
      turnoId: turnoIdAux,
      presentismo: !presentismoAux
    };
    await cambiarPresentismo(turno);
    setMostrar(await visualizarTurnos());
  };

  const handleClick_Borra = async (turnoId: number) => {
    const turno: iTurno = {
      turnoId: turnoId
    };
    await eliminarTurnoPorId(turno);
    setMostrar(await visualizarTurnos());
  };






  useEffect(() => {
    const aux = async () => {
      setMostrar(await visualizarTurnos());
    };
    aux();
  }, [fechaTurno, mostrar]);

  return (
    <>
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
    </>
  )
}
