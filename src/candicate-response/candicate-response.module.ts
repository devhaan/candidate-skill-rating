import { Module } from '@nestjs/common';
import { CandicateResponseService } from './candicate-response.service';
import { CandicateResponseController } from './candicate-response.controller';

@Module({
  controllers: [CandicateResponseController],
  providers: [CandicateResponseService]
})
export class CandicateResponseModule {}
