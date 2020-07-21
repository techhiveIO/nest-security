import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AccessCheckerService } from '../services/access-checker.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly accessCheckerService: AccessCheckerService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }

    console.log(roles);
    const request = context.switchToHttp().getRequest();
    // TODO: let user define payload
    const user = request.user;
    // return matchRoles(roles, user.roles);
    return true;
  }
}
