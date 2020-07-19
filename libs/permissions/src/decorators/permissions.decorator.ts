import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AclRole } from '../security.options';

export function AuthRole(...roles: string[]) {
  console.log(roles);
  return applyDecorators(
    SetMetadata('roles', roles),
    // UseGuards(AuthGuard, RolesGuard),
    // ApiBearerAuth(),
    // ApiUnauthorizedResponse({ description: 'Unauthorized"' }),
  );
}
