import { Body, HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { DatabaseService } from './db.service';
import turnosQueries from './queries/turnos.queries';
import { ResultSetHeader, RowDataPacket } from "mysql2";
import TurnoDTO from 'src/dto/turnos.dto';

@Injectable()
export class TurnosService {
  constructor(private databaseService: DatabaseService) { }

  async mostrarLibres(fechaActual: TurnoDTO): Promise<number> {
    const cuenta = await this.databaseService.executeSelect(turnosQueries.contarTurnosOcupados, [fechaActual.fechaTurno, fechaActual.horaTurno, fechaActual.andarivelSeleccionado]);
    // console.log(fechaActual)
    const valor = JSON.parse(JSON.stringify(cuenta))
    return valor[0].ocupados;
  };

  async reservarTurno(datosNuevoTurno: TurnoDTO): Promise<string> {
    const cuenta = await this.databaseService.executeSelect(turnosQueries.contarTurnosOcupados, [
      datosNuevoTurno.fechaTurno,
      datosNuevoTurno.horaTurno,
      datosNuevoTurno.andarivelSeleccionado]);

    const aux = JSON.parse(JSON.stringify(cuenta))
    aux[0].ocupados;
    // console.log(aux[0].ocupados);

    if (aux[0].ocupados > -1 && aux[0].ocupados < 4) {
      // console.log("Entró al if");
      await this.databaseService.executeQuery(turnosQueries.reservaTurno, [
        datosNuevoTurno.fechaTurno,
        datosNuevoTurno.horaTurno,
        datosNuevoTurno.andarivelSeleccionado,
        datosNuevoTurno.usuarioId]);
      return "Turno reservado con éxito"
    } else {
      throw new HttpException("Error al crear el turno, intente de nuevo", HttpStatus.BAD_REQUEST);
    };
  }

  async eliminarTurno(eliminarTurno: TurnoDTO): Promise<string> {
    const result: ResultSetHeader = await this.databaseService.executeQuery(turnosQueries.eliminarTurno, [
      eliminarTurno.fechaTurno,
      eliminarTurno.horaTurno,
      eliminarTurno.andarivelSeleccionado,
      eliminarTurno.usuarioId]);

    if (result.affectedRows == 0) {
      throw new HttpException("No se pudo eliminar", HttpStatus.NOT_FOUND);
    } else {
      return "Se borró el Turno"
    }
  }

  async muestraTurnoReservadoPorId(datosTurno: TurnoDTO): Promise<any> {
    const cuenta2 = await this.databaseService.executeSelect(turnosQueries.muestraTurnoReservadoPorId, [
      datosTurno.usuarioId,
      datosTurno.fechaTurno,
    ]);

    return cuenta2
  }
};




