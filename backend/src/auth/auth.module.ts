import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import {JwtStrategy} from './jwt.strategy'
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import UserModel from './schemas/user.schema';  



@Module({
  imports: [UsersModule,PassportModule, JwtModule.register({
    secret: process.env.SECRET_KEY,
    signOptions: {expiresIn: '10h'}
  }),   MongooseModule.forFeature([{ name: 'User', schema: UserModel}])],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
