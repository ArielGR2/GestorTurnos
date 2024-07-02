"use client";

import React, { useEffect, useState } from "react";
import "./Grilla.css";
import { mostrarLibres } from "@/app/services/GestorTurnos";
import { reservarTurno } from "@/app/services/GestorTurnos";
import { iTurno } from "@/app/model/iTurno";

export const Grilla = (props: any) => {
  const { fechaTurno, usuarioId } = props;
  const [mostrar, setMostrar] = useState<any[]>([]);

  //const [fecha, setFecha] = useState("2024-06-30");

  /* const obtenerUsuarioId = () => {
        const jwt = require('jsonwebtoken');
        const usuarioId: number | null = jwt.decode(sessionStorage.getItem('token')).usuarioId;
        
        return usuarioId;
    } */

  const visualizarTurnos = async () => {
    const auxturnos = [];

    for (let j = 7; j < 22; j++) {
      const andariveles: number[] = [];
      for (let i = 1; i < 5; i++) {
        const turno = {
          fechaTurno: fechaTurno.format("YYYY-MM-DD"),
          horaTurno: j,
          andarivelSeleccionado: i,
        };
        const response = await mostrarLibres(turno);
        andariveles.push(response);
      }
      auxturnos.push({ hora: j, andariveles: andariveles });
    }
    console.log("Auxturnos: " + auxturnos);
    return auxturnos;
  };

  const handleClick = (e: any) => {
    /* const usuarioId = obtenerUsuarioId();
        if (usuarioId) { */

    const { name, value } = e.target;
    const turno: iTurno = {
      fechaTurno: fechaTurno.format("YYYY-MM-DD"),
      horaTurno: name,
      andarivelSeleccionado: value,
      usuarioId: usuarioId,
    };
    reservarTurno(turno);
    /* } */
  };

  /* const sumaDia = () => {

        setFecha(prevFecha => prevFecha.clone().add(1, 'd'));
        var fecha2 = fecha.clone().add(1, 'd')
        setFecha("2024-07-01");

    }
    const restaDia = () => {
        var fecha3 = "2024-06-29"
        setFecha(fecha3)
    }

    const muestraFecha = () => {
        return fecha
    }*/

  useEffect(() => {
    console.log("Entro al useEffect!!!!");
    const aux = async () => {
      setMostrar(await visualizarTurnos());
    };
    aux();
  }, [fechaTurno]);

  return (
    <>
      <div className="contenedorGrilla">
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
            {mostrar.map((objetoHora, index2) => (
              <tr key={index2}>
                <td>{objetoHora.hora}</td>
                {objetoHora.andariveles.map(
                  (ocupados: number, index: number) => (
                    <td key={index}>
                      <button onClick={handleClick}> Reserva</button>
                      {ocupados}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
          {/* 
                    <tr> <td>8:00</td> <td><button onClick={handleClick} name="8" value="1" > Reserva</button> {visualizarTurnos(8, 1)}</td>
                        <td><button onClick={handleClick} name="8" value="2" > Reserva</button>{visualizarTurnos(8, 2)}</td>
                        <td><button onClick={handleClick} name="8" value="3" > Reserva</button>{visualizarTurnos(8, 3)}</td>
                        <td><button onClick={handleClick} name="8" value="4" > Reserva</button>{visualizarTurnos(8, 4)}</td> </tr>

                    <tr> <td>9:00</td> <td><button onClick={handleClick} name="9" value="1" > Reserva</button> {visualizarTurnos(9, 1)}</td>
                        <td><button onClick={handleClick} name="9" value="2" > Reserva</button>{visualizarTurnos(9, 2)}</td>
                        <td><button onClick={handleClick} name="9" value="3" > Reserva</button>{visualizarTurnos(9, 3)}</td>
                        <td><button onClick={handleClick} name="9" value="4" > Reserva</button>{visualizarTurnos(9, 4)}</td> </tr>

                    <tr> <td>10:00</td> <td><button onClick={handleClick} name="10" value="1" > Reserva</button> {visualizarTurnos(10, 1)}</td>
                        <td><button onClick={handleClick} name="10" value="2" > Reserva</button>{visualizarTurnos(10, 2)}</td>
                        <td><button onClick={handleClick} name="10" value="3" > Reserva</button>{visualizarTurnos(10, 3)}</td>
                        <td><button onClick={handleClick} name="10" value="4" > Reserva</button>{visualizarTurnos(10, 4)}</td> </tr>

                    <tr> <td>11:00</td> <td><button onClick={handleClick} name="11" value="1" > Reserva</button> {visualizarTurnos(11, 1)}</td>
                        <td><button onClick={handleClick} name="11" value="2" > Reserva</button>{visualizarTurnos(11, 2)}</td>
                        <td><button onClick={handleClick} name="11" value="3" > Reserva</button>{visualizarTurnos(11, 3)}</td>
                        <td><button onClick={handleClick} name="11" value="4" > Reserva</button>{visualizarTurnos(11, 4)}</td> </tr>

                    <tr> <td>12:00</td> <td><button onClick={handleClick} name="12" value="1" > Reserva</button> {visualizarTurnos(12, 1)}</td>
                        <td><button onClick={handleClick} name="12" value="2" > Reserva</button>{visualizarTurnos(12, 2)}</td>
                        <td><button onClick={handleClick} name="12" value="3" > Reserva</button>{visualizarTurnos(12, 3)}</td>
                        <td><button onClick={handleClick} name="12" value="4" > Reserva</button>{visualizarTurnos(12, 4)}</td> </tr>

 */}
        </table>
      </div>
    </>
  );
};
