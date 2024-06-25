import { Test, TestingModule } from '@nestjs/testing';
import { CandicateResponseService } from './candicate-response.service';

describe('CandicateResponseService', () => {
  let service: CandicateResponseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CandicateResponseService],
    }).compile();

    service = module.get<CandicateResponseService>(CandicateResponseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
