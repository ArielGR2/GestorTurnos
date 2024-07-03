"use client";
import React, { useEffect, useState } from "react";
import "./Grilla.css";
import { mostrarLibres } from "@/app/services/GestorTurnos";
import { reservarTurno } from "@/app/services/GestorTurnos";
import { iTurno } from "@/app/model/iTurno";

export const Grilla = (props: any) => {

  const { fechaTurno, usuarioId } = props;

  const [mostrar, setMostrar] = useState<any[]>([]);

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
    return auxturnos;
  };

  const handleClick = (e: any) => {
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
        </table>
      </div>
    </>
  );
};
