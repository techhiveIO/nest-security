import { DynamicModule, Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CONFIG_OPTIONS } from '@th/permissions/constants';

@Module({
  providers: [PermissionsService],
  exports: [PermissionsService],
})
export class PermissionsModule {
  static register(options): DynamicModule {
    return {
      module: PermissionsService,
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
