import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import UserModel from './schemas/user.schema';
import HeroModel from 'src/heroes/hero/schemas/hero.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserModel}])
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],

})
export class UsersModule {}
