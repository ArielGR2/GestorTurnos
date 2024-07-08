"use client"
import { iTurno } from '@/app/model/iTurno';
import { cambiarPresentismo, mostrarTurnosDelDia } from '@/app/services/GestorTurnos';
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
    return auxTurnos[0].data;

  };
  const handleClick = async (turnoId: number) => {
    console.log("Entro al handleClick" + turnoId  );
    const turno: iTurno = {
      turnoId : turnoId
      //fechaTurno: fechaTurno.format("YYYY-MM-DD"),
      
    };
    console.log("Turno quedó: " + turno.turnoId  );
    const response = await cambiarPresentismo(turno.turnoId);
      
    visualizarTurnos();
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
                <td><button onClick={() => handleClick(registro.turnoId)} >Cambiar Presentismo</button></td>
                <td><button  id={registro.turnoId} >Eliminar Turno</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
