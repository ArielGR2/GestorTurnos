'use client'
import clienteAxios from "../services/Axios";
import { AxiosResponse } from 'axios';
import { iTurno } from "../model/iTurno";
// import { iUsuarioLogin } from "../model/iUsuario";

export const mostrarLibres = async (turno: any): Promise<number> => {
  try {
    const response: AxiosResponse<any, any> = await clienteAxios.post("/turnos/ocupados", turno);
    //sessionStorage.setItem('token', response.data.accessToken);
    
    return response.data;
  } catch (error) {
    alert('No se puede encontar el numero de ocupados');
    throw new Error('Error en la busqueda del numero de ocupacion de los turnos');
  };
};

export const reservarTurno = async (turno: iTurno): Promise<any> => {
  try {
    const response: AxiosResponse<any, any> = await clienteAxios.post("/turnos/reserva", turno);
    
    
    return response.data;
  } catch (error) {
    alert('No se puede reservar el turno');
    throw new Error('Error');
  };
};








