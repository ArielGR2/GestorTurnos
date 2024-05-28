import { IsNumber, IsOptional, IsString } from "class-validator";

// DTO que se utiliza solo en el logueo
class UserLoginDTO{
  @IsOptional()
  @IsString()
  username: string;
  @IsOptional()
  @IsString()
  password:string; 
  @IsNumber()
  rolId: number ;
  
}

export default UserLoginDTO;