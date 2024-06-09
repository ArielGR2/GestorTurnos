
import { Injectable } from "@nestjs/common";
import UsuarioDTO from "src/dto/usuario.dto";
import { DatabaseService } from "./db.service";
import * as bcrypt from 'bcryptjs';
import usuariosQueries from "./queries/usuarios.queries";


@Injectable()
export class RegisterService {
  constructor(private databaseService: DatabaseService) { };

  async hashearContrasenia(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async RegistrarUsuario(usuario: UsuarioDTO): Promise<string> {
    const passwordEncriptada = await this.hashearContrasenia(usuario.password);

    await this.databaseService.executeQuery(usuariosQueries.registerUser, [
      usuario.email,
      usuario.username,
      passwordEncriptada,
      true,
      usuario.nrotelefono,
      usuario.fechanacimiento,
      usuario.rolId
    ]);
    return usuario.username;
  };

}