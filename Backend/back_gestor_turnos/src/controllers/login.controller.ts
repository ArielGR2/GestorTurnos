import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import UserLoginDTO from 'src/dto/userLogin.dto';
import { LoginService } from "src/services/login.service";

@Controller('/auth')
export class LoginController {
    constructor(private loginService: LoginService) { }

    @Post('/login')
    async login(@Body() body: UserLoginDTO) {
        const user = await this.loginService.validateUser(body);
        if (!user) {
            throw new HttpException("Usuario invalido", HttpStatus.UNAUTHORIZED);
        };
        return this.loginService.login(user)
    };
}