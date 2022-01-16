import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroModule } from './heroes/hero/hero.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.Mongo_URL,
      {
        useNewUrlParser: true
      }),HeroModule, AuthModule, UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService,
    //Blocking every access to the server without authentication, except /auth in order to register, login, signout 
     {provide: APP_GUARD, useClass: JwtAuthGuard}],
  
})
export class AppModule {}
