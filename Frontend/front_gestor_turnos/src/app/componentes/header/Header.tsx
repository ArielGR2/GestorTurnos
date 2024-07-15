'use client'
import React from 'react'
import './Header.css'
import logo from '../../../../public/logo.png'
import whatsapp from '../../../../public/whatsapp.png'

import telegram from '../../../../public/telegram.png'
import instagram from '../../../../public/instagram.png'
import x from '../../../../public/twitter.png'
import nadador from '../../../../public/nadador.png'


export const Header = () => {
  return (
    <div className='div-Header'>
      <div className='logo'><img height="100px" src={logo.src} alt="" /></div>
      <img height="80px"src={nadador.src} alt="" />
      <img height="80px"src={nadador.src} alt="" />
      <img height="80px"src={nadador.src} alt="" />
      <div className='redes'>
      <img src={whatsapp.src} alt="" />
      <img src={telegram.src} alt="" />
      <img src={instagram.src} alt="" />
      <img src={x.src} alt="" />
      

      </div>
    </div>
  )
}
