import { Test, TestingModule } from '@nestjs/testing';
import { RolesAndPermissionsService } from './roles-and-permissions.service';

describe('RolesAndPermissionsService', () => {
  let service: RolesAndPermissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesAndPermissionsService],
    }).compile();

    service = module.get<RolesAndPermissionsService>(
      RolesAndPermissionsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
