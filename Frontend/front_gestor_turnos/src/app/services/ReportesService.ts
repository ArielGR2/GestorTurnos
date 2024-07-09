'use client'
import clienteAxios from "../services/Axios";
import axios, { AxiosResponse } from 'axios';
import { iTurno } from "../model/iTurno";


export const diaConMasReservas = async (): Promise<any> => {
    try {
        const response: AxiosResponse<any, any> = await clienteAxios.get("/reportes/diaConMasReservas",);
        return response.data;
    } catch (error) {
        throw new Error('Error en la busqueda del numero de ocupacion de los turnos');
    };
};

export const turnosPorHoraDia = async (fechaTurno: any): Promise<any> => {
    try {
        const response: AxiosResponse<any, any> = await clienteAxios.post("/reportes/turnosPorHoraDia",[fechaTurno]);
        console.log("response : "+ response.data )
        return response.data;
    } catch (error) {
        throw new Error('Error');
    };
};


