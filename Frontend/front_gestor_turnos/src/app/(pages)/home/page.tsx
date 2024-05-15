'use clinet'
import React from 'react';
import './pageHome.css';
import { Login } from "../../componentes/login/login";


export default function Home() {
  return (
    <>
    <h1> Natación Club Atletico Estudiantes Olavarría</h1>
    <Login/>

    <div className='div-pageHome'>Control de Ruteo - Page Home</div>
    <a href='../../admin'>Boton Admin</a>
    <a href='../../profesor'>Boton Profesor</a>
    <a href='../../nadador'>Boton Nadador</a>

    </>
  )
}


/* 15/5 */