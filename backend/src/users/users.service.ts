import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import UserModel from './schemas/user.schema';
import User from './interfaces/user.interface';
import { Model } from 'mongoose';
import UserDTO from './dto/user.dto';
export type UserIN = any;

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') public readonly userModel: Model<User>) {}
    async addUser(userDTO: UserDTO) {
        const user = new this.userModel(userDTO);
        return await user.save();

    }
    private readonly users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'maria',
        password: 'guess',
      },
    ];
  
    async findOne(username: string): Promise<UserIN> {
      return this.users.find(user => user.username === username);
    }
  }