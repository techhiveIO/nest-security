import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  RolesAndPermission,
  RolesAndPermissionsSchema,
} from './schemas/roles-and-permission.schema';
import { AclOptions, TH_SECURITY_OPTIONS_TOKEN } from './security.options';
import { RoleProvider } from './services/role.provider';
import { of } from 'rxjs';
import { AccessCheckerService } from '@th/permissions/services/access-checker.service';
import { AclService } from '@th/permissions/services/acl.service';
import { RolesAndPermissionsService } from './services/roles-and-permissions.service';

// TODO: double check what needs to be done with this
const roleProvider = () => {
  return of(null);
};

const INTERNAL_PROVIDERS = [RolesAndPermissionsService];

@Module({
  imports: [
    // MongooseModule.forFeature([
    //   {
    //     name: RolesAndPermission.name,
    //     schema: RolesAndPermissionsSchema,
    //     collection: 'roles-and-permissions',
    //   },
    // ]),
  ],
  providers: [...INTERNAL_PROVIDERS],
  // TODO: is this needed?
  // providers: [AclService, AccessCheckerService],
})
export class PermissionsModule {
  static register(options: AclOptions): DynamicModule {
    return {
      module: PermissionsModule,
      providers: [
        {
          provide: TH_SECURITY_OPTIONS_TOKEN,
          useValue: options,
        },
        { provide: RoleProvider, useValue: roleProvider() },
        // TODO: check whether the 2 below should be here
        AclService,
        AccessCheckerService,
        // ...INTERNAL_PROVIDERS
      ],
      exports: [AclService, AccessCheckerService],
    };
  }
}
