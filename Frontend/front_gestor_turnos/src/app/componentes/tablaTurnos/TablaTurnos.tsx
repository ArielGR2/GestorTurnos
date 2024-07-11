"use client"
import { iTurno } from '@/app/model/iTurno';
import { cambiarPresentismo, eliminarTurnoPorId, mostrarTurnosDelDia } from '@/app/services/GestorTurnos';
import React, { useEffect, useState } from 'react'
import "./TablaTurnos.css"

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
          <thead className='titulosbord'>
            <tr>
              <th>Nombre</th>
              <th>Horario</th>
              <th>Andarivel</th>
              <th>Presentismo</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {mostrar.map((registro, index) => (
              <tr className='tr-registro' key={index}>

                <td className='nombre'>{registro.username}</td>
                <td className='borde'>{registro.horaTurno}</td>
                <td className='borde'>{registro.andarivelSeleccionado}</td>

                <td className='borde'>{registro.presentismo ? "Ausente " : "Presente"}<button onClick={() => handleClick_Cambia(registro.turnoId, registro.presentismo)}>Cambiar</button></td>

                <td className='eliminar'><button onClick={() => handleClick_Borra(registro.turnoId)} >Eliminar Turno</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
