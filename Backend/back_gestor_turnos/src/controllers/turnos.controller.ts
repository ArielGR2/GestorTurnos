import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import TurnoDTO from "src/dto/turnos.dto";
import { TurnosService } from "src/services/turnos.service";

@Controller('/turnos')
export class TurnosController {
    constructor(private turnosService: TurnosService) { }

    @Get()
    async obtenerTurnosLibres(@Body() body: TurnoDTO): Promise<number> {
        const turnosDisponibles = await this.turnosService.obtenerTurnosLibres(body);
        return turnosDisponibles;
    };

    @Post()
    async reservarTurno(@Body() body: TurnoDTO): Promise<string> {
        return await this.turnosService.reservarTurno(body);
    };

    @Put()
    async modificarTurno(){

    }

    @Delete()
    async eliminarTurno(){

    }

    
}