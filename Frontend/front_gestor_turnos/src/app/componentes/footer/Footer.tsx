'use client'
import React from 'react'
import './Footer.css'
import telefono from '../../../../public/telefono.png'
import mail from '../../../../public/mail.png'
import ubicacion from '../../../../public/ubicacion.png'


export const Footer = () => {
  return (
    <div className='div-Footer'>

      <div className='superior'>
        <div className='fotter_info'>
          <img src={ubicacion.src} alt="" />
          <p>Av. Del Valle y Lavalle - Olavarría |</p>
        </div>

        <div className='fotter_info'><img src={mail.src} alt="" />
          <p>contacto@elclub.com.ar |</p>
        </div>

        <div className='fotter_info'>
          <img src={telefono.src} alt="" />
          <p>2284 - 999999</p>
        </div>

      </div>
      <hr />
      <div className='inferior'>
        Ariel Romera | Lucas Fava Ⓡ Corporation

      </div>



    </div>

  )
}
