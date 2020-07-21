import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GateGuard } from '@th/permissions';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  @GateGuard('admin')
  getHello(): string {
    return this.appService.getHello();
  }
}
