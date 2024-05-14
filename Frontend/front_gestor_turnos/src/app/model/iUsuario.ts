export interface iUsuarioLogin {
  email?: string;
  username?: string; 
  password?: string;
}

export interface iUsuarioRegister {
  // Agregar todos los atributos que sean necesarios para registrar al usuario segun la tabla de DB
  email?: string;
  username?: string; 
  password?: string;
  nrotelefono?: number;
  fechanacimiento?: number;
}