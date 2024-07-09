import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule} from '@nestjs/jwt';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { DatabaseService } from './services/db.service';
import { RegisterController } from './controllers/register.controller';
import { RegisterService } from './services/register.service';
import { TurnosController } from './controllers/turnos.controller';
import { TurnosService } from './services/turnos.service';
import { ReportesController } from './controllers/reportes.controller';
import { ReportesService } from './services/reportes.service';

@Module({
  imports: [JwtModule.register({
    secret:'sdhsdjh',
    signOptions: {expiresIn:"1h"},
  })],
  controllers: [AppController, LoginController, RegisterController, TurnosController, ReportesController],
  providers: [AppService, LoginService,DatabaseService, RegisterService, TurnosService, ReportesService],
})
export class AppModule {}
