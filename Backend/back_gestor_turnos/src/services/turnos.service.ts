import { Body, HttpException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from './db.service';
import turnosQueries from './queries/turnos.queries';
import { ResultSetHeader, RowDataPacket } from "mysql2";
import * as bcrypt from 'bcryptjs';
import TurnoDTO from 'src/dto/turnos.dto';

@Injectable()
export class TurnosService {
  constructor(private databaseService: DatabaseService) { }

  async obtenerTurnosLibres(body: TurnoDTO): Promise<number> {
    const resultQuery = await this.databaseService.executeSelect(turnosQueries.getAllTurnosLibres, [body.fechaTurno, body.horaTurno, body.andarivelSeleccionado]);
    if (resultQuery) {
      return 4 //returno la cantidad de turnos libres;
    } 
    return 0;
  };

  async reservarTurno(body: TurnoDTO): Promise<string> {
    const resultQuery = await this.databaseService.executeQuery(turnosQueries.reservaTurno, [
      body.andarivelSeleccionado, 
      body.fechaTurno, 
      body.horaTurno, 
      body.usuarioId]);

    if (resultQuery){
      return "Turno reservado con exito"
    };
  };

  async modificarTurno(body: TurnoDTO): Promise<any> {
    const resultQuery = await this.databaseService.executeQuery(turnosQueries.modificarTurno, [
      body.andarivelSeleccionado, 
      body.fechaTurno, 
      body.horaTurno, 
      body.usuarioId, 
      body.turnoId, 
      body.presentismo]);
  };

  async eliminarTurno(body: TurnoDTO): Promise<any> {
    const resultQuery = await this.databaseService.executeQuery(turnosQueries.eliminarTurno, []);
  };

}
