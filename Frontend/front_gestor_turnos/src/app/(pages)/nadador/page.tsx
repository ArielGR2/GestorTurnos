'use client'
import './pageNadador.css'
import withRoles from "../../componentes/HOC/WithRoles"
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Grilla } from '@/app/componentes/grilla/Grilla'
import { mostrarLibres } from '@/app/services/GestorTurnos'
import { iTurno } from '@/app/model/iTurno'
import moment from 'moment'

const Nadador = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fecha, setFecha] = useState("2024-06-30");

  const router = useRouter();
  const pathname = usePathname();

  const cerrarSesion = () => {
    sessionStorage.removeItem('token')
    setIsLoggedIn(false)
    if (pathname !== '/home') {
      router.push('home')
    };
  };
   
  const obtenerUsuarioId = ()=> {
    const jwt = require('jsonwebtoken');
    const usuarioId: number | null = jwt.decode(sessionStorage.getItem('token')).usuarioId ;
    //console.log("EL USUARIO:" + usuarioId)
    return usuarioId;
  }
  
  const sumaDia = ()=> {
    
    //setFecha(prevFecha => prevFecha.clone().add(1, 'd'));
    //var fecha2 = fecha.clone().add(1, 'd')
    setFecha("2024-07-01");
     
  }
  const restaDia = ()=>{
    var fecha3 = "2024-06-29"
    setFecha(fecha3)
     }

  const muestraFecha = ()=>{
      return fecha
  }

  useEffect(() => {
    console.log("fecha dentro del Effect: " + muestraFecha());
  }, [fecha]);
  
  
  return (
    <>
      <div className='div-pageNadador'>
        <button onClick={restaDia}>Ayer</button><h1>Bienvenido Nadador </h1><button onClick={sumaDia}>Mañana </button>
        <h2>Estos son los disponibles de:  {muestraFecha()}</h2>
        
        
        <div>
          
          <Grilla 
          //key={1}
          fechaTurno={fecha}
          usuarioId= {2}
          
                  />

        </div>
      </div>

      <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </>

  )
}

export default withRoles(Nadador, [1], "./home");    
