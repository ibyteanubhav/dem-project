import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://localhost/nest'), AuthModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
