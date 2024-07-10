'use client';
import './Register.css';
import React, { useRef, useState } from 'react'
import { registrarUsuario } from '@/app/services/RegisterService';

export const RegisterAdministrador = () => {
  const formAux = useRef();
  const [nuevoAdmin, setNuevoAdmin] = useState({
    username: '',
    password: '',
    activo: true,
    rolId: 0,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNuevoAdmin(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    const usuarioRegistrado = await registrarUsuario(nuevoAdmin);
    alert("Nuevo Admin Registrado");
    setNuevoAdmin({
      username: '',
      password: '',
      activo: true,
      rolId: 0,
    })
    formAux.current.reset();
  };


  return (
    <>
      <form ref={formAux}  onSubmit={handleRegister} className='formLogin'>
        <div className='divLogin'>
          <h2>Registrar Administrador</h2>
          <label>Ingrese nuevo Profesor:</label>
          <input type="text" name="username" value={nuevoAdmin.username} onChange={handleChange} className="input" placeholder='Usuario...' />
          <label>Ingrese su contraseña:</label>
          <input type="password" name="password" value={nuevoAdmin.password} onChange={handleChange} className="input" placeholder='Contraseña...' />
          <br />
          <button type="submit" className="submit-button">Registrar</button>
        </div>
      </form>
    </>
  )
};
