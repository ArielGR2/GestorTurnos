import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from './db.service';
import UserLoginDTO from 'src/dto/userLogin.dto';
import usuariosQueries from './queries/usuarios.queries';
import { ResultSetHeader, RowDataPacket } from "mysql2";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class LoginService {
    constructor(private jwtService: JwtService, private databaseService: DatabaseService) { }

    async validateUser(user: UserLoginDTO): Promise<any> {
        /* USÉ PARA CREAR EN HASH EN DBEAVER: */
        /*const contraHaseada = await this.hashearContrasenia("nadador");
        console.log("Contraseña hasheada: ",contraHaseada);  */

        const usuarioDB = await this.getUserDB(user.username);

        if (usuarioDB) {
            if (await bcrypt.compare(user.password, usuarioDB.password)) {
                return {
                    username: usuarioDB.username,
                    rolId: usuarioDB.rolId,
                    usuarioId: usuarioDB.usuarioId
                };
            };
            return null;
        };
    };

    async hashearContrasenia(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    async getUserDB(username: string): Promise<UserLoginDTO> {
        const resultQuery: RowDataPacket[] = await this.databaseService.executeSelect(usuariosQueries.getUser, [username]);
        if (resultQuery.length === 0) {
            throw new NotFoundException('El usuario no existe');
        };
        const result = resultQuery[0];
        return {
            username: result['username'],
            password: result['password'],
            rolId: result['rolId'],
            usuarioId: result['usuarioId']
        };
    };

    login(user: UserLoginDTO) {
        const payload = {
            username: user.username,
            rolId: user.rolId,
            usuarioId: user.usuarioId

        };
        return { accessToken: this.jwtService.sign(payload), };
    };
}

