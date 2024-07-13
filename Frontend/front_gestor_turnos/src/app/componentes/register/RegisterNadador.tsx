'use client';
import './Register.css';
import React, { useRef, useState } from 'react'
import { registrarUsuario } from '@/app/services/RegisterService';

export const RegisterNadador = () => {
  const formAux = useRef<HTMLFormElement>(null);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    username: '',
    password: '',
    activo: true,
    rolId: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNuevoUsuario(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const usuarioRegistrado = await registrarUsuario(nuevoUsuario);
    alert("Nuevo Nadador Registrado");
    setNuevoUsuario({
      username: '',
      password: '',
      activo: true,
      rolId: 1,
    });
    formAux.current?.reset();
  };

  return (
    <>
      <form ref={formAux} onSubmit={handleRegister} className='formLogin'>
        <div className='divLogin'>
          <h2>Registrar Nadador</h2>
          <label>Ingrese nuevo Nadador:</label>
          <input type="text" name="username" value={nuevoUsuario.username} onChange={handleChange} className="input" placeholder='Usuario...' />
          <label>Ingrese su contraseña:</label>
          <input type="password" name="password" value={nuevoUsuario.password} onChange={handleChange} className="input" placeholder='Contraseña...' />
          <br />
          <button type="submit" className="button">Registrar</button>
        </div>
      </form>
    </>
  )
};
