import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CandicateResponseService } from './candicate-response.service';
import { CreateCandicateResponseDto } from './dto/create-candicate-response.dto';
import { UpdateCandicateResponseDto } from './dto/update-candicate-response.dto';

@Controller('candicate-response')
export class CandicateResponseController {
  constructor(private readonly candicateResponseService: CandicateResponseService) {}

  @Post()
  create(@Body() createCandicateResponseDto: CreateCandicateResponseDto) {
    return this.candicateResponseService.create(createCandicateResponseDto);
  }

  @Get()
  findAll() {
    return this.candicateResponseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candicateResponseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCandicateResponseDto: UpdateCandicateResponseDto) {
    return this.candicateResponseService.update(+id, updateCandicateResponseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candicateResponseService.remove(+id);
  }
}
