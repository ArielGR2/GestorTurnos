import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule} from '@nestjs/jwt';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { DatabaseService } from './services/db.service';

@Module({
  imports: [JwtModule.register({
    secret:'sdhsdjh',
    signOptions: {expiresIn:"1h"},
  })],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService, DatabaseService],
})
export class AppModule {}
