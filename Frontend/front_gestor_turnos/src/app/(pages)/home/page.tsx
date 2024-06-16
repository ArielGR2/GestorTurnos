'use client'
import React from 'react';
import './pageHome.css';
import { Login } from "../../componentes/login/login";
import Publicidad from "../../componentes/publicidad/publicidad";
import { Register } from '@/app/componentes/register/Register';


export default function Home() {
  return (
    <>
      <h1> Natación Club Atletico Estudiantes Olavarría</h1>
      <div className='divContenedor'>
        <Publicidad />
        <Login />
        {/* <Register />  Comento este segmento de codigo hasta definir si lo vamos a utilizar  */}
      </div>
    </>
  )
}

