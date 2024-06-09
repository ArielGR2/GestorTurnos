import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import UsuarioDTO from "src/dto/usuario.dto";
import { LoginService } from "src/services/login.service";
import { RegisterService } from "src/services/register.service";

@Controller('/register')
export class RegisterController {
    constructor(private registerService: RegisterService) { }

    @Post()
    async RegistrarUsuario(@Body() body: UsuarioDTO): Promise<any> {
        const user = await this.registerService.RegistrarUsuario(body);
        return {message: `Usuario ${user} creado con exito`};
    };
}