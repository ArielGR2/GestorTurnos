'use client';
import './login.css';
import React, { useState } from 'react'
import { loginUser } from '../../services/LoginService';
import { useRouter } from 'next/navigation';

export const Login = () => {
  const [usuario, setUsuario] = useState({
    username: '',
    password: '',
  });

  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUsuario(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const loginExitoso = await loginUser(usuario);
    if (loginExitoso) {
      const jwt = require('jsonwebtoken');
      const rolId: number | null = jwt.decode(sessionStorage.getItem('token')).rolId;
    
      if (rolId == 0) {
        router.push("./administrador");
      } else if (rolId == 1) {
        router.push("./nadador");
      } else if (rolId == 2) {
        router.push("./profesor");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="text" name="username" value={usuario.username} onChange={handleChange} className="input" />
        <input type="text" name="password" value={usuario.password} onChange={handleChange} className="input" />
        <br />
        <button type="submit" className="submit-button">Log In</button>
      </form>
    </>
  )
};
