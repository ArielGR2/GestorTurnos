'use client'
import  clienteAxios  from "../services/Axios";
import { AxiosResponse } from 'axios';
import { iUsuarioLogin } from "../model/iUsuario";

export const loginUser = async (usuario: any) => {
  try {
    const response = await Promise.resolve(clienteAxios.post("http://localhost:8080/auth/login", usuario));
    sessionStorage.setItem('token', response.data.accessToken);
    return response.data;
  } catch (error) {
    throw new Error('Error en el login');
  };
}


// export const loginUser = async (usuario) => {
//   try {
//     const response = await Promise.resolve(clienteAxios.post("http://localhost:8080/auth/login", usuario));
//     sessionStorage.setItem('token', response.data.accessToken);
//     console.log(response);
//     console.log("Llegamos aca");
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// }

