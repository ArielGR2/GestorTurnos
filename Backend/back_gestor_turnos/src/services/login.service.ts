import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from './db.service';
import UserLoginDTO from 'src/dto/userLogin.dto';
import usuariosQueries from './queries/usuarios.queries';
import { ResultSetHeader, RowDataPacket } from "mysql2";



@Injectable()
export class LoginService {
    constructor(private jwtService: JwtService, private databaseService: DatabaseService) { }
    // Agregar Bcryptjs

    async validateUser(user: UserLoginDTO): Promise<any> {

        const usuarioDB = await this.getUserDB(user.username, user.password);
        if (user.username === usuarioDB.username && user.password === usuarioDB.password) {
            return {
                username: usuarioDB.username,
                rolId: usuarioDB.rolId
            };
        };
        return null;
    };

    async getUserDB(username: string, password: string): Promise<UserLoginDTO> {
        const resultQuery: RowDataPacket[] = await this.databaseService.executeSelect(usuariosQueries.getUser, [username, password]);
        if (resultQuery.length === 0) {
            throw new NotFoundException('El usuario no existe');
        };
        const result = resultQuery[0];
        return {
            username: result['username'],
            password: result['password'],
            rolId: result['rolId']
        };
    };

    login(user: UserLoginDTO) {
        const payload = { username: user.username };
        return { accessToken: this.jwtService.sign(payload), };
    };
}

