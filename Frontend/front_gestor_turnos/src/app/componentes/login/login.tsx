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
    // console.log(name);
    // console.log(value);
    setUsuario(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(usuario);
    
    loginUser(usuario);

    if (usuario.username == "admin" && usuario.password == "admin") {
      router.push("./administrador");
    } else if (usuario.username == "nadador" && usuario.password == "nadador") {
      router.push("./nadador");
    } else if (usuario.username == "profe" && usuario.password == "profe") {
      router.push("./profesor");
    }
    else {
      alert("No se ha ENCONTRADO")
    }
    /* if (loginExitoso) {
      const userData = await getInformacionUsuario();
      if (userData?.role === "ADM") {
        router.push("./administrador");
      } else {
        router.push("./jugador");
      }
    } */

  };





return (
  <>
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {/* <input type="number" onChange={handleChange} /> */}
      <input type="text" name="username" value={usuario.username} onChange={handleChange} className="input" />
      <input type="text" name="password" value={usuario.password} onChange={handleChange} className="input" />

      <br />
      <button type="submit" className="submit-button">Log In</button>
    </form>
  </>


)
};
