'use client'
import React from 'react';
import './publicidad.css';
import publicidad from '../../../../public/publicidad.jpg'


export default function Publicidad() {
  return (
    <>
      <div className='publicidad'>
      <img height="200px" src={publicidad.src} alt="" />
      <p>"La natación no solo es un deporte, es una pasión que te lleva más allá de tus límites. Cada brazada es un paso hacia tu mejor versión física y mental. La piscina es el escenario donde descubrirás nuevas metas. Sumérgete en el desafío y encontrarás el camino hacia tu propio éxito. ¡Siente la energía del agua y verás que no existen límites!"</p>
      </div>
    </>

  )
}

