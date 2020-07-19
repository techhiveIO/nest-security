import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthRole } from '@th/permissions/decorators/permissions.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @AuthRole('admin')
  getHello(): string {
    return this.appService.getHello();
  }
}
