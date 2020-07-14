import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PermissionsService } from './permissions.service';
import { RolesAndPermission, RolesAndPermissionsSchema } from '@th/permissions/schemas/roles-and-permission.schema';
import { AclService } from './services/acl.service';
import { AclOptions, TH_SECURITY_OPTIONS_TOKEN } from '@th/permissions/security.options';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: RolesAndPermission.name,
      schema: RolesAndPermissionsSchema,
      collection: 'roles-and-permissions',
    }]),
  ],
  providers: [PermissionsService, AclService],
  exports: [PermissionsService],
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
        PermissionsService,
      ],
      exports: [PermissionsService],
    };
  }
}
