import { Body, HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { DatabaseService } from './db.service';
import turnosQueries from './queries/turnos.queries';
import { ResultSetHeader, RowDataPacket } from "mysql2";
import TurnoDTO from 'src/dto/turnos.dto';
import FechayHoraDTO from 'src/dto/fechayhora.dto';

@Injectable()
export class TurnosService {
  constructor(private databaseService: DatabaseService) { }
  
  async turnosLibresAnd1(fechaActual: FechayHoraDTO): Promise<number> {
    //getAllTurnosLibresPorDia deberia retornar el valor disponible de turnos para 1 dia + 1 hora + 1 andarivel sumando los null que se alojan en la T_calendario
    //la Query getAllTurnosLibresPorDia debe retornoarnos la couenta de turnos libres para 1 dia + 1 hora + un andarivel
    const cuenta = await this.databaseService.executeSelect(turnosQueries.getAllTurnosLibresPorDiaAnd1, [fechaActual.fechaActual, fechaActual.horaActual]);
    console.log(fechaActual)
    const valor = JSON.parse(JSON.stringify(cuenta))
    //console.log(typeof(valor[0].total))
    //Tenemos que ver la forma de que en el Front cada turno se visualice donde corresponda
    return valor[0].total ;//returno la cantidad de turnos libres;
  };

  async turnosLibresAnd2(fechaActual: FechayHoraDTO): Promise<number> {
    const cuenta = await this.databaseService.executeSelect(turnosQueries.getAllTurnosLibresPorDiaAnd2, [fechaActual.fechaActual, fechaActual.horaActual]);
    console.log(fechaActual)
    const valor = JSON.parse(JSON.stringify(cuenta))
    return valor[0].total ;
  };

  async turnosLibresAnd3(fechaActual: FechayHoraDTO): Promise<number> {
    const cuenta = await this.databaseService.executeSelect(turnosQueries.getAllTurnosLibresPorDiaAnd3, [fechaActual.fechaActual, fechaActual.horaActual]);
    console.log(fechaActual)
    const valor = JSON.parse(JSON.stringify(cuenta))
    return valor[0].total ;
  };

  async turnosLibresAnd4(fechaActual: FechayHoraDTO): Promise<number> {
    const cuenta = await this.databaseService.executeSelect(turnosQueries.getAllTurnosLibresPorDiaAnd4, [fechaActual.fechaActual, fechaActual.horaActual]);
    console.log(fechaActual)
    const valor = JSON.parse(JSON.stringify(cuenta))
    return valor[0].total ;
  };






  async reservarTurno(datosNuevoTurno: TurnoDTO): Promise<string> {
    
    const resultQuery: ResultSetHeader = await this.databaseService.executeQuery(turnosQueries.reservaTurno, [
      datosNuevoTurno.fechaTurno,
      datosNuevoTurno.horaTurno,
      datosNuevoTurno.andarivelSeleccionado,
      datosNuevoTurno.usuarioId]);

    if (!resultQuery) {
      throw new HttpException("Error al crear el turno, intente de nuevo", HttpStatus.BAD_REQUEST);
    };

   // Suponemos que en ultimoTurnoId vamos a tener un numero que representa el ID del ultimo turno
    const ultimoTurnoId: RowDataPacket[] = await this.databaseService.executeSelect(turnosQueries.obtenerUltimoTurnoId, [
      datosNuevoTurno.andarivelSeleccionado,
      datosNuevoTurno.fechaTurno,
      datosNuevoTurno.horaTurno,
      datosNuevoTurno.usuarioId
    ]);
    
    const ultimoIdDeTurno = JSON.parse(JSON.stringify(ultimoTurnoId));
    console.log("id de turno"+ultimoIdDeTurno[0].total);

    const idCalendarioNull: RowDataPacket[] = await this.databaseService.executeSelect(turnosQueries.obtenerIdCalendarioAnd1, [
      // datosNuevoTurno.andarivelSeleccionado,
      datosNuevoTurno.fechaTurno,
      datosNuevoTurno.horaTurno,
      // datosNuevoTurno.usuarioId
      ])

    const ultimoIdDeCalendarioNull = JSON.parse(JSON.stringify(idCalendarioNull));
    console.log("id de calendario"+ultimoIdDeCalendarioNull[0].total);

    await this.databaseService.executeQuery(turnosQueries.actualizarTablaCalendario, [ultimoIdDeTurno[0].total, ultimoIdDeCalendarioNull[0].total]);

    return "Turno reservado con exito"
  };





  //En TurnoDTO recibimos los datos que el usuario quiere modificar en el turno. 
  //Esos datos los reemplazamos en la Base de datos con la query modificarTurnoById
  async modificarTurno(nuevoTurno: TurnoDTO, IdDeTurnoAModificar: number): Promise<any> {
    const resultQuery = await this.databaseService.executeQuery(turnosQueries.modificarTurnoById, [IdDeTurnoAModificar,
      nuevoTurno.andarivelSeleccionado,
      nuevoTurno.fechaTurno,
      nuevoTurno.horaTurno,
      nuevoTurno.presentismo,
      nuevoTurno.turnoId,
      nuevoTurno.usuarioId]);

    if (resultQuery.affectedRows == 1) {
      return nuevoTurno
    }

    throw new HttpException("No se pudo actualizar el Turno ya que no se encontro el Id", HttpStatus.NOT_FOUND);

  };

  async eliminarTurno(idTurnoAEliminar: number) {
    const resultQuery = await this.databaseService.executeQuery(turnosQueries.eliminarTurno, [idTurnoAEliminar]);
  };




  //Analizar este caso... Si estoy conectado desde el FRONT, en lugar de pasar la estructura TURNODTO
  //No podria pasar directamente el ID del usuario que llamo a metodo
  //Obteniendo sus datos del Token o algo asi?????
  //En caso de resolverlo, cambiar el parametro de entrada del controller y service + el parameto del query
  async obtenerTurnosPorUsuarioId(body: TurnoDTO): Promise<TurnoDTO[]> {
    const resultQuery: RowDataPacket[] = await this.databaseService.executeSelect(turnosQueries.obtenerTurnosPorUsuarioId, [body.usuarioId]);

    if (resultQuery.length === 0) {
      throw new NotFoundException('El usuario no tiene turnos reservados');
    }

    const turnosReservados = resultQuery.map((rs: RowDataPacket) => {
      return {
        turnoId: rs['turnoId'],
        fechaTurno: rs['fechaTurno'],
        horaTurno: rs['horaTurno'],
        andarivelSeleccionado: rs['andarivelSeleccionado'],
        usuarioId: rs['usuarioId'],
        presentismo: rs['presentismo']
      };
    });
    return turnosReservados;
  };
}
