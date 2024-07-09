import { Injectable } from "@nestjs/common";
import { DatabaseService } from "./db.service";
import turnosQueries from "./queries/turnos.queries";
import reportesQueries from "./queries/reportes.queries";
import { RowDataPacket } from "mysql2";


@Injectable()
export class ReportesService {
    constructor(private databaseService: DatabaseService) { }

    async diaConMasReservas(): Promise<any> {
        const response = await this.databaseService.executeSelect(reportesQueries.diaConMasReservas, []);
        //console.log("Response es:  "+ response );
        const result = response.map((rs: RowDataPacket) => {
            return {
                fechaTurno: rs['fechaTurno'],
                cantidad: rs['count(fechaTurno)'],

            };
        });
        return result
    }

    async nadadorConMasAusencias(fecha:any): Promise<any> {
        const response = await this.databaseService.executeSelect(reportesQueries.nadadorConMasAusencias, [fecha.fechaTurno]);
        const result = response.map((rs: RowDataPacket) => {
            return {
                nombre: rs['username'],
                usuarioId: rs['usuarioId'],
                cantidad: rs['count(presentismo)'],
                
            };
        });
        return result
    }

    async turnosPorHoraDia(fecha:any): Promise<any> {
        const response = await this.databaseService.executeSelect(reportesQueries.turnosPorHoraDia, [fecha.fechaTurno]);
        
        const result = response.map((rs: RowDataPacket) => {
            return {
                hora: rs['horaTurno'],
                cantidad: rs['count(horaTurno)'],
                
                
            };
        });
        return result
    }






}