import { Body, Controller, Delete, HttpException, HttpStatus, Param, Patch, Post, Put} from "@nestjs/common";
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
    };

    @Post('/muestraTurnoReservado') 
    async muestraTurnoreservadoPorId(@Body() datosTurno: any): Promise<any> {
        return await this.turnosService.muestraTurnoReservadoPorId(datosTurno);
    };

    @Post('/mostrarTurnosDelDia')
    async mostrarTurnosDelDia(@Body() fechaDelDia: any): Promise<any> {
        return await this.turnosService.mostrarTurnosDelDia(fechaDelDia);
    };

    @Put('/cambiarPresentismo')
    async cambiarPresentismo(@Body() turno: TurnoDTO): Promise<any> {
        return await this.turnosService.cambiarPresentismo(turno);
    };

    @Delete('/eliminarTurnoPorId')
    async eliminarTurnoPorId(@Body() turnoId: TurnoDTO): Promise<any> {
        return await this.turnosService.eliminarTurnoPorId(turnoId);
    }
}