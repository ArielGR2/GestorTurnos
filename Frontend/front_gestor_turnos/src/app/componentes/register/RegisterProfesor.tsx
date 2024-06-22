'use client';
import './Register.css';
import React, { useState } from 'react'
// import { useRouter } from 'next/navigation';
import { registrarUsuario } from '@/app/services/RegisterService';

export const RegisterProfesor = () => {
  const [nuevoUsuario, setNuevoUsuario] = useState({
    username: '',
    password: '',
    activo: true,
    rolId: 2,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNuevoUsuario(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    const usuarioRegistrado = await registrarUsuario(nuevoUsuario);
    alert("Nuevo Profesor Registrado");
    // vaciarFormulario();
  };


  return (
    <>
      <form onSubmit={handleRegister} className='formLogin' id='formulario'>
        <div className='divLogin'>
          <h2>Registrar Profesor</h2>
          <label>Ingrese nuevo Profesor:</label>
          <input type="text" name="username" value={nuevoUsuario.username} onChange={handleChange} className="input" placeholder='Usuario...' />
          <label>Ingrese su contraseña:</label>
          <input type="password" name="password" value={nuevoUsuario.password} onChange={handleChange} className="input" placeholder='Contraseña...' />
          <br />
          <button type="submit" className="submit-button">Registrar</button>
        </div>
      </form>
    </>
  )

}