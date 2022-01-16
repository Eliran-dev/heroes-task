import { ConflictException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import User from './interfaces/user.interface';
import UserDTO from './dto/user.dto';
import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @InjectModel('User') private readonly userModel: Model<User>
  ) { }



  async login(userDTO: User) {
    const payload = {
      email: userDTO.email
    };
    const isValid = await this.validateUser(userDTO.email, userDTO.password);
    console.log(isValid + "  s")

    if (isValid) {
      console.log("isValid")
      return {
        access_token: this.jwtService.sign(payload)
      }
    }
    return false
  }
  async doesUserExists(email): Promise<string> {
    email = email.toLowerCase();
    const isUser = await this.userModel.findOne({ email: email });

    console.log(isUser)

    if (isUser != null)
    {
      console.log("Found it ")
      return isUser.password;

    }
    return "false"
  }
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.doesUserExists(email);
   return await bcrypt.compare(pass, user);
    
  }


  async register(userDTO: UserDTO): Promise<User> {

    console.log(userDTO)
    const user = new this.userModel(userDTO);
    console.log(user.password);
    user.email = user.email.toLowerCase();
    user.password = await bcrypt.hash(user.password, 10)
    console.log(user.password);

    return await user.save().catch((e) => {
      {
        throw new ConflictException(
          e.errors.email.message
        );
        }
      })
    
  }
}