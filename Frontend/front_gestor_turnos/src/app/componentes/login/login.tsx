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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //console.log(usuario);

    loginUser(usuario);

    if (usuario.username == "admin") {
      router.push("./administrador");
    } else if (usuario.username == "nadador") {
      router.push("./nadador");
    } else if (usuario.username == "profe") {
      router.push("./profesor");
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
