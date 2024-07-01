'use client'
import React from 'react'
import { mostrarLibres } from '@/app/services/GestorTurnos';
import { reservarTurno } from '@/app/services/GestorTurnos';
import { iTurno } from '@/app/model/iTurno';




export const Grilla = (props: any) => {
    const { fechaTurno, usuarioId } = props;

    const visualizarTurnos = async (hora: number, andarivel: number) => {
        const turno = {
            "fechaTurno": fechaTurno,
            "horaTurno": hora,
            "andarivelSeleccionado": andarivel
        }
        const response = await mostrarLibres(turno)
        return response
    }

    const handleClick = (e: any) => {
        const { name, value } = e.target;
        const turno: iTurno = {

            "fechaTurno": fechaTurno,
            "horaTurno": name,
            "andarivelSeleccionado": value,
            "usuarioId": usuarioId
        };
        reservarTurno(turno)
    };




    return (
        <>




            <div>
                <table>

                    <tr><th>Horarios</th><th>Andarivel 1</th><th>Andarivel 2</th><th>Andarivel 3</th><th>Andarivel 4</th></tr>

                    <tr> <td>7:00</td> <td><button onClick={handleClick} name="7" value="1" > Reserva</button> {visualizarTurnos(7, 1)}</td>
                     <td><button onClick={handleClick} name="7" value="2" > Reserva</button>{visualizarTurnos(7, 2)}</td>
                      <td><button onClick={handleClick} name="7" value="3" > Reserva</button>{visualizarTurnos(7, 3)}</td>
                       <td><button onClick={handleClick} name="7" value="4" > Reserva</button>{visualizarTurnos(7, 4)}</td> </tr>

                       <tr> <td>8:00</td> <td><button onClick={handleClick} name="8" value="1" > Reserva</button> {visualizarTurnos(8, 1)}</td>
                     <td><button onClick={handleClick} name="8" value="2" > Reserva</button>{visualizarTurnos(8, 2)}</td>
                      <td><button onClick={handleClick} name="8" value="3" > Reserva</button>{visualizarTurnos(8, 3)}</td>
                       <td><button onClick={handleClick} name="8" value="4" > Reserva</button>{visualizarTurnos(8, 4)}</td> </tr>

                       <tr> <td>9:00</td> <td><button onClick={handleClick} name="9" value="1" > Reserva</button> {visualizarTurnos(9, 1)}</td>
                     <td><button onClick={handleClick} name="9" value="2" > Reserva</button>{visualizarTurnos(9, 2)}</td>
                      <td><button onClick={handleClick} name="9" value="3" > Reserva</button>{visualizarTurnos(9, 3)}</td>
                       <td><button onClick={handleClick} name="9" value="4" > Reserva</button>{visualizarTurnos(9, 4)}</td> </tr>



                </table>



            </div>
        </>
    )
}
