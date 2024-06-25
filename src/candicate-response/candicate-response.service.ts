import { Injectable } from '@nestjs/common';
import { CreateCandicateResponseDto } from './dto/create-candicate-response.dto';
import { UpdateCandicateResponseDto } from './dto/update-candicate-response.dto';

@Injectable()
export class CandicateResponseService {
  create(createCandicateResponseDto: CreateCandicateResponseDto) {
    return 'This action adds a new candicateResponse';
  }

  findAll() {
    return `This action returns all candicateResponse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} candicateResponse`;
  }

  update(id: number, updateCandicateResponseDto: UpdateCandicateResponseDto) {
    return `This action updates a #${id} candicateResponse`;
  }

  remove(id: number) {
    return `This action removes a #${id} candicateResponse`;
  }
}
