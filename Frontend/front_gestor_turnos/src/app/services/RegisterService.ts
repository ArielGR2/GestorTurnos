'use client'
import clienteAxios from "../services/Axios";
import { AxiosResponse } from 'axios';
// import { iUsuarioLogin } from "../model/iUsuario";

export const registrarUsuario = async (nuevoUsuario: any) => {
  try {
    const response: AxiosResponse<any, any> = await clienteAxios.post('/register', nuevoUsuario);
  
    // sessionStorage.setItem('token', response.data.accessToken);
    // console.log("response data"+response.data.accessToken);
  
    alert("Usuario creado con exito.");
    alert("Debe identificarse en el login");
    return response.data;
    
  } catch (error) {
    alert("Error")
  }

}