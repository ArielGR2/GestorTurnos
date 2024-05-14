import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { iUsuarioDTO } from 'src/dto/dto.dto';


@Injectable()
export class LoginService {
    constructor(private jwtService: JwtService) { }

    // Agregar Bcryptjs

    async validateUser(user: iUsuarioDTO): Promise<any> {
        if (user.username === "Alumno" && user.password === "Alumno") {
            return {
                username: "Alumno",
                roles: ["Alumno"]
            }
        }

        if (user.username === "Profesor" && user.password === "Profesor") {
            return {
                username: "Profesor",
                roles: ["Profesor"]
            }
        }

        if (user.username === "Admin" && user.password === "Admin") {
            return {
                username: "Admin",
                roles: ["Admin"]
            }
        }

        return false
    }
    login(user:iUsuarioDTO){
        const payload = {username: user.username};
        return {accessToken: this.jwtService.sign(payload),}
    }

}

