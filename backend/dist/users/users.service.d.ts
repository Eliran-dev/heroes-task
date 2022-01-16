import User from './interfaces/user.interface';
import { Model } from 'mongoose';
import UserDTO from './dto/user.dto';
export declare type UserIN = any;
export declare class UsersService {
    readonly userModel: Model<User>;
    constructor(userModel: Model<User>);
    addUser(userDTO: UserDTO): Promise<User & {
        _id: any;
    }>;
    private readonly users;
    findOne(username: string): Promise<UserIN>;
}
