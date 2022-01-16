import { Controller, Get, Post, Request, UseGuards, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AllowUnauthorizedRequest } from './auth/allowed-routes.strategy';
import { Cookies } from '@nestjsplus/cookies';
@Controller()
export class AppController {
  constructor(
    private authservice: AuthService) {}


}
