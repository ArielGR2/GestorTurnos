import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import TurnoDTO from "src/dto/turnos.dto";
import { TurnosService } from "src/services/turnos.service";

@Controller('/turnos')
export class TurnosController {
    constructor(private turnosService: TurnosService) { }


    @Post('/ocupados')
    async mostrarLibres(@Body() fechaActual: TurnoDTO): Promise<number> {
        const turnosDisponibles = await this.turnosService.mostrarLibres(fechaActual);
        return turnosDisponibles;
    };

    @Post('/reserva')
    async reservarTurno(@Body() datosNuevoTurno: TurnoDTO): Promise<string> {
        return await this.turnosService.reservarTurno(datosNuevoTurno);
    };

    @Delete('/eliminar')
    async eliminarTurno(@Body() eliminarTurno: TurnoDTO ): Promise<string>{
        return await this.turnosService.eliminarTurno(eliminarTurno);
    }
    @Post('/muestraTurnoReservado') //Para mostrar el turno que tenga reservado por dia por usuariId
    async muestraTurnoreservadoPorId(@Body() datosTurno: TurnoDTO): Promise<any> {
        return await this.turnosService.muestraTurnoReservadoPorId(datosTurno);
    };

}