import { IsDate, IsOptional } from "class-validator";

// DTO que se utiliza en el CRUD

class FechaDTO {
    @IsOptional()
    @IsDate()
    fechaActual: Date;

}

export default FechaDTO;
