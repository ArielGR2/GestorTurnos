import { IsBoolean, IsDate, IsEmail, IsNumber, IsOptional, IsString, isNumber } from "class-validator";

// DTO que se utiliza en el CRUD

class UsuarioDTO {
    @IsOptional()
    usuarioId: number;
    @IsOptional()
    @IsString()
    username: string;
    @IsOptional()
    @IsString()
    password: string;
    @IsOptional()
    @IsBoolean()
    activo: boolean;
    @IsOptional()
    @IsNumber()
    rolId: number;
}

export default UsuarioDTO;



