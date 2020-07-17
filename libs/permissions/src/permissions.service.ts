/**
 * @license
 * Copyright TechHive.IO. All Rights Reserved.
 * Licensed under the CC-BY-4.0 License. See LICENSE in the project root for license information.
 */
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class PermissionsService {
  constructor(@Inject('CONFIG_OPTIONS') private options) {
    console.log(options);
  }
}
