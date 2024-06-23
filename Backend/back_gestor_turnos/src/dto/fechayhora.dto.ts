import { IsDate, IsNumber, IsOptional } from "class-validator";

// DTO que se utiliza en el CRUD

class FechayHoraDTO {
    @IsOptional()
    @IsDate()
    fechaActual: Date;
    @IsOptional()
    @IsNumber()
    horaActual: number;
}

export default FechayHoraDTO;
