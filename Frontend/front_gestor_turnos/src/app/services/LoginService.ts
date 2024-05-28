'use client'
import clienteAxios from "../services/Axios";
import { AxiosResponse } from 'axios';
// import { iUsuarioLogin } from "../model/iUsuario";

export const loginUser = async (usuario: any) => {
  try {
    const response: AxiosResponse<any, any> = await clienteAxios.post("/auth/login", usuario);
    sessionStorage.setItem('token', response.data.accessToken);
    return response.data;
  } catch (error) {
    alert('Usuario o Contraseña invalidos');
    throw new Error('Error en el login');
  };
}

// export const getInformacionUsuario = async (): Promise<{ username: string; role: string }> => {
//   const response = await clienteAxios.get("/usuarios/info");
//   return response.data;
// }

