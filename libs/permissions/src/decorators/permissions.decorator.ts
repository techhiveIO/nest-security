import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '../guards/authorization.guard';

export const GateGuard = (...roles: string[]): any =>
  applyDecorators(SetMetadata('roles', roles), UseGuards(AuthorizationGuard));
