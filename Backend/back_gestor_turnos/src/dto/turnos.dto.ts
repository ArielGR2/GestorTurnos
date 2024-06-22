import { IsBoolean, IsDate, IsNumber, IsOptional, IsString, isNumber } from "class-validator";

// DTO que se utiliza en el CRUD

class TurnoDTO {
    @IsOptional()
    @IsNumber()
    turnoId: number;
    @IsOptional()
    @IsDate()
    fechaTurno: Date;
    @IsOptional()
    @IsNumber()
    horaTurno: number;
    @IsOptional()
    @IsNumber()
    andarivelSeleccionado: number;
    @IsOptional()
    @IsNumber()
    usuarioId: number;
    @IsOptional()
    @IsBoolean()
    presentismo: boolean;
}

export default TurnoDTO;
