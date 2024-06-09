import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule} from '@nestjs/jwt';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { DatabaseService } from './services/db.service';
import { RegisterController } from './controllers/register.controller';
import { RegisterService } from './services/register.service';

@Module({
  imports: [JwtModule.register({
    secret:'sdhsdjh',
    signOptions: {expiresIn:"1h"},
  })],
  controllers: [AppController, LoginController, RegisterController],
  providers: [AppService, LoginService,DatabaseService, RegisterService],
})
export class AppModule {}
