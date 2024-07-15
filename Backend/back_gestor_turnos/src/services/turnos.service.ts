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
    const valor = JSON.parse(JSON.stringify(cuenta))
    return valor[0].ocupados;
  };

  async reservarTurno(datosNuevoTurno: TurnoDTO): Promise<string> {
    // Verificar si el usuario ya tiene un turno en la misma fecha
    const cuentaUsuario = await this.databaseService.executeSelect(turnosQueries.verificarTurnoUsuarioEnFecha, [
      datosNuevoTurno.usuarioId,
      datosNuevoTurno.fechaTurno
    ]);

    const auxUsuario = JSON.parse(JSON.stringify(cuentaUsuario));
    auxUsuario[0].ocupados;

    if (auxUsuario[0].ocupados > 0) {
      // El usuario ya tiene un turno en la misma fecha
      throw new HttpException("Ya tienes un turno reservado en esta fecha. No puedes reservar otro turno el mismo día.", HttpStatus.BAD_REQUEST);
    }

    // Contar turnos ocupados en el mismo andarivel y horario
    const cuenta = await this.databaseService.executeSelect(turnosQueries.contarTurnosOcupados, [
      datosNuevoTurno.fechaTurno,
      datosNuevoTurno.horaTurno,
      datosNuevoTurno.andarivelSeleccionado]);

    const aux = JSON.parse(JSON.stringify(cuenta))
    aux[0].ocupados;

    if (aux[0].ocupados > -1 && aux[0].ocupados < 4) {
      // Hay espacio disponible, puedo reservar
      await this.databaseService.executeQuery(turnosQueries.reservaTurno, [
        datosNuevoTurno.fechaTurno,
        datosNuevoTurno.horaTurno,
        datosNuevoTurno.andarivelSeleccionado,
        datosNuevoTurno.usuarioId]);
      return "Turno reservado con éxito"
    } else {
      // Andarivel Ocupado
      throw new HttpException("Andarivel ocupado. Reserve otro turno.", HttpStatus.BAD_REQUEST);
    };
  }

  async eliminarTurno(eliminarTurno: any): Promise<void | string> {
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

  async muestraTurnoReservadoPorId(datosTurno: any): Promise<any> {
    const cuenta2 = await this.databaseService.executeSelect(turnosQueries.muestraTurnoReservadoPorId, [
      datosTurno.usuarioId,
      datosTurno.fechaTurno,
    ]);
    return cuenta2;
  }

  async mostrarTurnosDelDia(fechaDelDia: any): Promise<any> {
    const turnosDelDia = await this.databaseService.executeSelect(turnosQueries.muestraTurnosDelDia,
      [fechaDelDia.fechaTurno]
    );
    return turnosDelDia;
  }

  async cambiarPresentismo(turno: TurnoDTO): Promise<any> {
    const result: ResultSetHeader = await this.databaseService.executeQuery(turnosQueries.cambiarPresentismo, [turno.presentismo,
    turno.turnoId]);

    return result
  }

  async eliminarTurnoPorId(turno: TurnoDTO): Promise<any> {
    const result: ResultSetHeader = await this.databaseService.executeQuery(turnosQueries.eliminarTurnoPorId, [
      turno.turnoId
    ]);
    if (result.affectedRows == 0) {
      throw new HttpException("No se pudo eliminar", HttpStatus.NOT_FOUND);
    } else {
      return "Se borró el Turno"
    }
  }

};




