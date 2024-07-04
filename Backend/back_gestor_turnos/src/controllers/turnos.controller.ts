import { Body, Controller, Delete, HttpException, HttpStatus, Post } from "@nestjs/common";
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
    async reservarTurno(@Body() datosNuevoTurno: any): Promise<string> {
        return await this.turnosService.reservarTurno(datosNuevoTurno);
    };

    @Delete('/eliminar')
    async eliminarTurno(@Body() turno: any): Promise<void | string> {
        if (!turno || !turno.fechaTurno || !turno.horaTurno || !turno.andarivelSeleccionado || !turno.usuarioId) {
            throw new HttpException('Datos incompletos', HttpStatus.BAD_REQUEST);
        }
        return await this.turnosService.eliminarTurno(turno);
    }

    @Post('/muestraTurnoReservado') //Para mostrar el turno que tenga reservado por dia por usuariId
    async muestraTurnoreservadoPorId(@Body() datosTurno: any): Promise<any> {
        return await this.turnosService.muestraTurnoReservadoPorId(datosTurno);
    };

}