import UserDTO from './dto/user.dto';
import { AuthService } from './auth.service';
import User from './interfaces/user.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(res: any, userDTO: UserDTO): Promise<any>;
    login(res: any, userInter: User): Promise<any>;
}
