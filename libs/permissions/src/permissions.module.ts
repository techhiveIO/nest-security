import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PermissionsService } from './permissions.service';
import { CONFIG_OPTIONS } from './constants';
import { RolesAndPermission, RolesAndPermissionsSchema } from '@th/permissions/schemas/roles-and-permission.schema';

export interface PermissionsModuleOptions {
  [role: string]: string[]
}

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: RolesAndPermission.name,
      schema: RolesAndPermissionsSchema,
      collection: 'roles-and-permissions',
    }]),
  ],
  providers: [PermissionsService],
  exports: [PermissionsService],
})
export class PermissionsModule {
  static register(options: PermissionsModuleOptions): DynamicModule {
    return {
      module: PermissionsModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        PermissionsService,
      ],
      exports: [PermissionsService],
    };
  }
}
