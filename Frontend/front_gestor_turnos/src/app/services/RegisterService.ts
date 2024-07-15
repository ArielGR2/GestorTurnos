'use client'
import clienteAxios from "../services/Axios";
import { AxiosResponse } from 'axios';

export const registrarUsuario = async (nuevoUsuario: any) => {
  try {
    const response: AxiosResponse<any, any> = await clienteAxios.post('/register', nuevoUsuario);
    
    return response.data;
    
  } catch (error) {
    alert("Error")
  }

}