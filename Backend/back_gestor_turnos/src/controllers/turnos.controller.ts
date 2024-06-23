import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import TurnoDTO from "src/dto/turnos.dto";
import { TurnosService } from "src/services/turnos.service";

@Controller('/turnos')
export class TurnosController {
    constructor(private turnosService: TurnosService) { }

    //Este metodo Get tenemos que considerarlo privado, se usa solo internamente para poder visualizar la disponibilidad de turnos
    @Get()
    //IMPORTANTE - Del front tenemos que obtener la fecha del dia que el usuario esta visualizando
    //Usaremos este controlador para devolver al front SOLO el nro de turnos disponibles para ser reservados
    //En cada lugar donde tengamos disciplina LIBRE debe aparecer al lado el numero de turnos a ocupar
    async visualizarTurnosLibresParaReservarPorDia(@Body() fechaQueElUsrEstaViendo: Date,@Param() fechaQueElUsrVe: Date): Promise<number> {
        //Ver como recibimos el dia desde el front para definir que parametro se debe enviar al metodo
        //Si corresponde algo tipo Body o Param
        const turnosDisponibles = await this.turnosService.visualizarTurnosLibresParaReservarPorDia(fechaQueElUsrEstaViendo,fechaQueElUsrVe);
        //El retorno solo deve ser un NRO de turnos disponibles
        return turnosDisponibles;
    };

    @Post()
    async reservarTurno(@Body() datosNuevoTurno: TurnoDTO): Promise<string> {
        return await this.turnosService.reservarTurno(datosNuevoTurno);
    };


    @Put('/:turnoId')
    //Para llegar a modificar el usuario primero debe haber seleccionado 1 turno a cambiar
    //A partir de alli tenemos que almancenar el IdDeTurnoAModificar (id del turno seleccionado)
    //En el Body recibimos los nuevos datos para modificar el turno existente
    async modificarTurno(@Body() nuevoTurno: TurnoDTO, @Param('turnoId') IdDeTurnoAModificar: number): Promise<TurnoDTO> {
        return await this.turnosService.modificarTurno(nuevoTurno, IdDeTurnoAModificar)
    };

    @Delete('/:EliminarTurno')
    async eliminarTurno(@Param() idTurnoAEliminar: number) {
        return await this.turnosService.eliminarTurno(idTurnoAEliminar);
    };


}