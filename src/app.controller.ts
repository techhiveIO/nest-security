import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';

import { GateGuard } from '@th/permissions';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {
  }

  // @UseGuards(AuthGuard('local'))
  // @Get()
  // @GateGuard('moderator')
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  //

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @GateGuard('moderator')
  getModeratorProfile(@Request() req) {
    return req.user;
  }
}
