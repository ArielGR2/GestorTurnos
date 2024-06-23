import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import FechayHoraDTO from "src/dto/fechayhora.dto";
import TurnoDTO from "src/dto/turnos.dto";
import { TurnosService } from "src/services/turnos.service";

@Controller('/turnos')
export class TurnosController {
    constructor(private turnosService: TurnosService) { }
    //Este metodo Get tenemos que considerarlo privado, se usa solo internamente para poder visualizar la disponibilidad de turnos
    @Post('/disponiblesAnd1')
    //IMPORTANTE - Del front tenemos que obtener la fecha del dia que el usuario esta visualizando
    //Usaremos este controlador para devolver al front SOLO el nro de turnos disponibles para ser reservados
    //En cada lugar donde tengamos disciplina LIBRE debe aparecer al lado el numero de turnos a ocupar
    async turnosLibresAnd1(@Body() fechaActual: FechayHoraDTO): Promise<number> {
        //Ver como recibimos el dia desde el front para definir que parametro se debe enviar al metodo
        //Si corresponde algo tipo Body o Param
        const turnosDisponibles = await this.turnosService.turnosLibresAnd1(fechaActual);
        //El retorno solo deve ser un NRO de turnos disponibles
        return turnosDisponibles;
    };
    @Post('/disponiblesAnd2')
    async turnosLibresAnd2(@Body() fechaActual: FechayHoraDTO): Promise<number> {
        const turnosDisponibles = await this.turnosService.turnosLibresAnd2(fechaActual);
        return turnosDisponibles;
    };
    @Post('/disponiblesAnd3')
    async turnosLibresAnd3(@Body() fechaActual: FechayHoraDTO): Promise<number> {
        const turnosDisponibles = await this.turnosService.turnosLibresAnd3(fechaActual);
        return turnosDisponibles;
    };
    @Post('/disponiblesAnd4')
    async turnosLibresAnd4(@Body() fechaActual: FechayHoraDTO): Promise<number> {
        const turnosDisponibles = await this.turnosService.turnosLibresAnd4(fechaActual);
        return turnosDisponibles;
    };


    @Post('/reserva')
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