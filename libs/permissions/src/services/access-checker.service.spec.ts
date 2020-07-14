import { Test, TestingModule } from '@nestjs/testing';
import { AccessCheckerService } from './access-checker.service';

describe('AccessCheckerService', () => {
  let service: AccessCheckerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessCheckerService],
    }).compile();

    service = module.get<AccessCheckerService>(AccessCheckerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
