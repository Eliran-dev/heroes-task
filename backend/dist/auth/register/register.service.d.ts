import User from 'src/users/interfaces/user.interface';
import { Model } from 'mongoose';
import UserDTO from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
export declare class RegisterService extends UsersService {
    constructor(userModel: Model<User>);
    registerUser(userDTO: UserDTO): Promise<User>;
}
