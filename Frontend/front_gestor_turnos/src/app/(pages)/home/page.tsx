'use clinet'
import React from 'react';
import './pageHome.css';
import { Login } from "../../componentes/login/login";


export default function Home() {
  return (
    <>
    <Login/>
    <div className='div-pageHome'>Control de Ruteo - Page Home</div>
    <a href='../../admin'>Boton Admin</a>
    <a href='../../profesor'>Boton Profesor</a>
    <a href='../../nadador'>Boton Nadador</a>

    </>
  )
}
