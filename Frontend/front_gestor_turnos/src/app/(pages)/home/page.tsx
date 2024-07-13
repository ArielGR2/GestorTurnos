'use client'
import React from 'react';
import './pageHome.css';
import { Login } from "../../componentes/login/login";
import Publicidad from "../../componentes/publicidad/publicidad";

export default function Home() {
  return (
    <>
      <h1> Natación Club Atletico Estudiantes Olavarría</h1>
      <div className='divContenedor'>
        <Publicidad />
        <Login />
      </div>
    </>
  )
}

