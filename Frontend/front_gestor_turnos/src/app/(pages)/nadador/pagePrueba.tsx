'use client'
import './pageNadador.css'
import withRoles from "../../componentes/HOC/WithRoles"
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Grilla } from '@/app/componentes/grilla/Grilla'
import { mostrarLibres } from '@/app/services/GestorTurnos'
import { iTurno } from '@/app/model/iTurno'



const Nadador = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [stateGrilla, setStateGrilla] = useState();

  const router = useRouter();
  const pathname = usePathname();

  const cerrarSesion = () => {
    sessionStorage.removeItem('token')
    setIsLoggedIn(false)
    if (pathname !== '/home') {
      router.push('home')
    };
  };
  

  const  [turno, setTurno] = useState<[]>([]);
  const pruebaTurnos = async (e: any) => {
    //e.preventDefault();
    const auxTurno = {
      turnoId : 1,
      fechaTurno : "2024-06-22",
      horaTurno: 8,
      andarivelSeleccionado: 3,
      usuarioId: 4,
      presentismo: false,
    };
    console.log("Turno es: " + auxTurno)
    const auxTurnosDisp = await mostrarLibres(auxTurno);
    setTurno([auxTurnos, auxTurnosDisp])
    //alert("");
  };
    

  return (
    <>
      <div className='div-pageNadador'>
        <h1>Bienvenido Nadador</h1>
        { /* Esto es la Grilla con los tunos por andarivel y horario */}
        <div>

          <Grilla onLoad={pruebaTurnos}
            key={22}
            turnoId={turno[0] }
            fechaTurno={turno.fechaTurno}
            horaTurno={turno.horaTurno}
            andarivelSeleccionado={turno.andarivelSeleccionado}
            usuarioId={turno.usuarioId}
            presentismo={turno.presentismo }
            turnosDisponibles={auxTurnosDisp}


          />


        </div>
      </div>

      <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </>

  )
}

export default withRoles(Nadador, [1], "./home");


