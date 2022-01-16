import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Res,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import UserDTO from './dto/user.dto';
import { AuthService } from './auth.service';
import { AllowUnauthorizedRequest } from './allowed-routes.strategy';
import User from './interfaces/user.interface';

@AllowUnauthorizedRequest()
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/register')
    async register(@Res() res, @Body() userDTO: UserDTO) {
        const user = await this.authService.register(userDTO);
        console.log(user)
        try 
        {
        return res.status(HttpStatus.OK).json({
            message: "User has been created successfully",
            user
        })
    }
        catch (e) {
            res.json({
            status: false,
            message: e.message // check if duplicate message exist
           })
          }    
        
    
    
    }

        @Post('/login')
        async login(@Res() res, @Body() userInter: User) {
            const user = await this.authService.login(userInter);
            if(user != false)
            {
            console.log(user)
            return res.status(HttpStatus.OK).json({
                message: "User has logged in successfully",
                user
            })    
    
        }
        return res.status(HttpStatus.UNAUTHORIZED).json({
            message: "User does not exist or bad logging information (email/password)"        })            }
        


}