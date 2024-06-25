import { Test, TestingModule } from '@nestjs/testing';
import { CandicateResponseController } from './candicate-response.controller';
import { CandicateResponseService } from './candicate-response.service';

describe('CandicateResponseController', () => {
  let controller: CandicateResponseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandicateResponseController],
      providers: [CandicateResponseService],
    }).compile();

    controller = module.get<CandicateResponseController>(CandicateResponseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
