import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import FechayHoraDTO from "src/dto/fechayhora.dto";
import TurnoDTO from "src/dto/turnos.dto";
import { TurnosService } from "src/services/turnos.service";

@Controller('/turnos')
export class TurnosController {
    constructor(private turnosService: TurnosService) { }
    //Este metodo Get tenemos que considerarlo privado, se usa solo internamente para poder visualizar la disponibilidad de turnos
    
    @Post('/ocupados')
    //IMPORTANTE - Del front tenemos que obtener la fecha del dia que el usuario esta visualizando
    //Usaremos este controlador para devolver al front SOLO el nro de turnos disponibles para ser reservados
    //En cada lugar donde tengamos disciplina LIBRE debe aparecer al lado el numero de turnos a ocupar
    async mostrarLibres(@Body() fechaActual: TurnoDTO): Promise<number> {
        //Ver como recibimos el dia desde el front para definir que parametro se debe enviar al metodo
        //Si corresponde algo tipo Body o Param
        const turnosDisponibles = await this.turnosService.mostrarLibres(fechaActual);
        //El retorno solo deve ser un NRO de turnos disponibles
        return turnosDisponibles;
    };
    

    @Post('/reserva')
    async reservarTurno(@Body() datosNuevoTurno: TurnoDTO): Promise<string> {
        return await this.turnosService.reservarTurno(datosNuevoTurno);
    };

   

}