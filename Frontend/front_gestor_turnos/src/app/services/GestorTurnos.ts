'use client'
import clienteAxios from "../services/Axios";
import { AxiosResponse } from 'axios';
import { iTurno } from "../model/iTurno";
// import { iUsuarioLogin } from "../model/iUsuario";

export const mostrarLibres = async (turno: any): Promise<number> => {
  try {
    const response: AxiosResponse<any, any> = await clienteAxios.post("/turnos/ocupados", turno);
    return response.data;
  } catch (error) {
    alert('No se puede encontar el numero de ocupados');
    throw new Error('Error en la busqueda del numero de ocupacion de los turnos');
  };
};

export const reservarTurno = async (turno: any): Promise<any> => {
  try {
    const response: AxiosResponse<any, any> = await clienteAxios.post("/turnos/reserva", turno );
    return response.data;
  } catch (error) {
    alert('No se puede reservar el turno');
    throw new Error('Error');
  };
};

export const eliminarTurno = async (turno: any): Promise<any> => {
  console.log("muestro turno en gestor turno front",turno);
  try {
    const response: AxiosResponse<any, any> = await clienteAxios.delete("turnos/eliminar", {data : turno});
    console.log("solo response ",response);
    console.log("response data",response.data);
    return response.data;
  } catch  (error) {
    alert('No se eliminar el turno');
    throw new Error('Error');
  };
};

export const muestraTurnoReservado = async (turno: iTurno): Promise<any> => {
  try {
    const response: AxiosResponse<any, any> = await clienteAxios.post("/turnos/muestraTurnoReservado", turno)
    return response.data
  } catch  (error) {
    alert('No se pudo traer el turno');
    throw new Error('Error');
  };
};







