'use client';
import './Register.css';
import React, { useState } from 'react'
// import { useRouter } from 'next/navigation';
import { registrarUsuario } from '@/app/services/RegisterService';

export const RegisterAdministrador = () => {
  const [nuevoAdmin, setNuevoAdmin] = useState({
    email: '',
    username: '',
    password: '',
    activo: true,
    nrotelefono: '',
    fechanacimiento: '',
    rolId: 0,
  });

  // const router = useRouter();

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

    // if (usuarioRegistrado) {
    //   const jwt = require('jsonwebtoken');
    //   const rolId: number | null = jwt.decode(sessionStorage.getItem('token')).rolId;

    //   if (rolId == 0) {
    //     router.push("./administrador");
    //   } else if (rolId == 1) {
    //     router.push("./nadador");
    //   } else if (rolId == 2) {
    //     router.push("./profesor");
    //   }
    // }
  };

  return (
    <>
      <form onSubmit={handleRegister} className='formLogin'>
        <div className='divLogin'>
          <h2>Registrar Administrador</h2>
          <label>Ingrese nuevo Profesor:</label>
          <input type="text" name="username" value={nuevoAdmin.username} onChange={handleChange} className="input" placeholder='Usuario...' />
          <label>Ingrese su email:</label>
          <input type="email" name="email" value={nuevoAdmin.email} onChange={handleChange} className="input" placeholder='Email...' />
          <label>Ingrese su contraseña:</label>
          <input type="password" name="password" value={nuevoAdmin.password} onChange={handleChange} className="input" placeholder='Contraseña...' />
          <label>Ingrese su celular:</label>
          <input type="number" name="nrotelefono" value={nuevoAdmin.nrotelefono} onChange={handleChange} className="input" placeholder='Celular...' />
          <label>Fecha de Nacimiento:</label>
          <input type="date" name="fechanacimiento" value={nuevoAdmin.fechanacimiento} onChange={handleChange} className="input" placeholder='Fecha...' />
          <br />
          <button type="submit" className="submit-button">Registrar</button>
        </div>
      </form>
    </>
  )
};
