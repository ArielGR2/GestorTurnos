import { Body, Controller, Get, Post } from "@nestjs/common";
import TurnoDTO from "src/dto/turnos.dto";
import { ReportesService } from "src/services/reportes.service";

@Controller('/reportes')

export class ReportesController {
    constructor(private reportesService: ReportesService) { }

    @Get('/diaConMasReservas')
    async diaConMasReservas(): Promise<any> {
        return await this.reportesService.diaConMasReservas();
    };

    @Post('/nadadorConMasAusencias')
    async nadadorConMasAusencias(@Body() fecha: TurnoDTO): Promise<any> {
        return await this.reportesService.nadadorConMasAusencias(fecha);
    };

    @Post('/turnosPorHoraDia')
    async turnosPorHoraDia(@Body() fecha: TurnoDTO): Promise<any> {
        return await this.reportesService.turnosPorHoraDia(fecha);
    };

}