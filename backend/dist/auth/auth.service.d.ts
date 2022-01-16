import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import User from './interfaces/user.interface';
import UserDTO from './dto/user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    private readonly userModel;
    constructor(usersService: UsersService, jwtService: JwtService, userModel: Model<User>);
    login(userDTO: User): Promise<false | {
        access_token: string;
    }>;
    doesUserExists(email: any): Promise<string>;
    validateUser(email: string, pass: string): Promise<any>;
    register(userDTO: UserDTO): Promise<User>;
}
