/**
 * @license
 * Copyright TechHive.IO. All Rights Reserved.
 * Licensed under the CC-BY-4.0 License. See LICENSE in the project root for license information.
 */

import { Test, TestingModule } from '@nestjs/testing';
import { AclService } from './acl.service';

describe('AclService', () => {
  let service: AclService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AclService],
    }).compile();

    service = module.get<AclService>(AclService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
