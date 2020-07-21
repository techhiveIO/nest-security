import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AppService } from './app.service';
import { GateGuard } from '@th/permissions';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @GateGuard('moderator')
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req): Promise<any> {
    return req.user;
  }
}
