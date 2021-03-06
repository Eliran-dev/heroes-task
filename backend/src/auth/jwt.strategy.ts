import { ExtractJwt, Strategy} from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'

export class JwtStrategy extends PassportStrategy(Strategy) {
    
    constructor() {
        
        super({
            
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.SECRET_KEY,

        });
    }
    async validate(payload: any) {
        console.log("username",payload)

        return { email: payload.email };
      }
}