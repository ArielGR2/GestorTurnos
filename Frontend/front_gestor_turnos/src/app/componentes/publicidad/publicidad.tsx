'use client'
import React from 'react';
import './publicidad.css';
import publicidad from '../../../../public/publicidad.jpg'


export default function Publicidad() {
  return (
    <>
      <div className='publicidad'>
        {/* <h1 className='Natatorio CAE'>asd</h1> */}
        <img height="200px" src={publicidad.src} alt="" />
      </div>
    </>

  )
}

