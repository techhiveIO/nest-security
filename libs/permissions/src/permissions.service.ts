import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class PermissionsService {
  constructor(@Inject('CONFIG_OPTIONS') private options) {
  }
}
